import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(express.json()) //middleware
app.use(cors())

app.get('/accounts', async (req, res) => {
  const account = await prisma.accounts.findMany(
    {
      include: {
        words_db: true
      },
    }
  )

  res.status(200).send(JSON.stringify(account));
})

app.post('/post', async (req, res) => {
  if (!req.body) {
    res.send({ message: 'only retards hide their accounts' })
  }

  const { username} = req.body
  const account = await prisma.accounts.create({
    data: {
      username: username,
      password: `${username}isdumbass`,
      email: `${username}@prisma.io`
    },
  })


  res.status(200).send(JSON.stringify(account)); 
})

app.put('/addWords/user_id', async (req, res) => {
  const { user_id, word_name, definition  } = req.params;
  
  for (let i = 0; i < word_name.length; i++) {
    await prisma.words.create({
      data: {
        word_name: word_name[i],
        definition: definition[i],
        accountsUser_id: Number(user_id)
      }
    })
  }
  
  res.status(200).send(JSON.stringify(word_name));
})

app.put('/saveWords/:word_id', async (req, res) => {
  const { word_id } = req.params
  const word = await prisma.words.update({
    where: { id: Number(word_id) },
    data: { saved: true },
  })
  res.status(200).send(JSON.stringify(word));
})

app.delete('/accounts/:account_id', async (req, res) => {
  const { account_id } = req.params

  const word = await prisma.words.findMany({
    where: { accountsUser_id: Number(account_id) }
  })

  for (let i = 0; i < word.length; i++) {
    await prisma.words.delete({
      where: { id: Number(word[i].id) }
    })
  }

  const account = await prisma.accounts.delete({
    where: { user_id: Number(account_id) }
  })

  res.status(200).send(JSON.stringify(account));
})

app.listen(3005, () =>
  console.log('REST API server ready at: http://localhost:3005'),
)