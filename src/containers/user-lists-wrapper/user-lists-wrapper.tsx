import React from "react";
import styles from "./user-lists-wrapper.module.scss";
import UserListsDetail from "../../component/user-lists-detail/user-lists-detail";

export default class UserListsWrapper extends React.Component {
  render() {
    return (
      <>
        <header className={styles.title}>This is user's lists wrapper</header>
        <UserListsDetail />
      </>
    );
  }
}
