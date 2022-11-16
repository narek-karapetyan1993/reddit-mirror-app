import React from "react";
import styles from "./sharebutton.css";
import { EIcons } from "../../../../enumeration";
import { Icon } from "../../../../Icon";

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon name={EIcons.shareBtn} />
    </button>
  );
}
