import React from "react";
import styles from "./flairtext.css";
import { IPost } from '../../../../../store/posts/actions';
import { Text } from "../../../../Text";

export function FlairText({ flairText }: IPost) {
  return (
    <span className={styles.flairText}>
      <Text size={14}>{flairText}</Text>
    </span>
  );
}
