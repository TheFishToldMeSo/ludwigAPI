import React from "react";
import styles from "./user-lists.module.scss"
import UserListsWrapper from "../../containers/user-lists-wrapper/user-lists-wrapper";

export default class UserLists extends React.Component {
  render() {
    return (
      <>
        <header className={styles.title}>This is user's lists page</header>
        <UserListsWrapper/>
      </>
    );
  }
}
