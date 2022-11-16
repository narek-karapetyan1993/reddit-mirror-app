import React from "react";
import { EIcons } from "../../../../enumeration";
import { Icon } from "../../../../Icon";
import styles from "./deletebutton.css";

export function DeleteButton() {
  return (
    <button className={styles.deleteButton}>
      <Icon name={EIcons.deleteBtn} />
    </button>
  );
}
