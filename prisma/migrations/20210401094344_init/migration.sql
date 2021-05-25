-- CreateTable
CREATE TABLE "accounts" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "words" (
    "id" SERIAL NOT NULL,
    "word_name" VARCHAR(50) NOT NULL,
    "definition" VARCHAR(100) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saved" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts.username_unique" ON "accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts.email_unique" ON "accounts"("email");
