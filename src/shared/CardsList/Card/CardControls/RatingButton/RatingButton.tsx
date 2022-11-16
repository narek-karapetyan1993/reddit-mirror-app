import React from "react";
import styles from "./ratingbutton.css";
import { Icon } from "../../../../Icon";
import { EIcons } from "../../../../enumeration";

export function RatingButton() {
  return (
    <button className={styles.ratingButton}>
      <Icon name={EIcons.ratingBtn} />
    </button>
  );
}
