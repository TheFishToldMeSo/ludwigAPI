import React from "react";
import { ReactElement, useState } from "react";
import styles from "./user-lists-detail.module.scss";
import { apiFetch } from "../../shared/axios";
import { PrismaClient } from "@prisma/client";

export default class UserListsDetail extends React.Component {
  render() {
    var boxText:string = "input user's name";

    const setBoxText = (t: string) => {
      boxText = t;
    };

    return (
      <>
        <header className={styles.title}>This is user's lists content</header>
        <input
          placeholder={boxText}
          onChange={(event) => {
            setBoxText(event.target.value);
            
            console.log(event.target.value);
              console.log(boxText);
          }}
        ></input>
        <button
          onClick={() =>
            apiFetch.post("post", {username: boxText, word_name: ["mot", "con", "vit"], definition: ["xoe ra", "hai cai", "canh"]})
            .then((res) => {
              console.log(res.data);
            })
          }
        >
          text
        </button>
      </>
    );
  }
}
