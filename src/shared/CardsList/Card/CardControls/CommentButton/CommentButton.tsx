import React from "react";
import { Break } from "../../../../Break";
import { EIcons } from "../../../../enumeration";
import { Icon } from "../../../../Icon";
import { Text } from "../../../../Text";
import styles from "./commentbutton.css";
import { IPost } from '../../../../../store/posts/actions';

export function CommentButton({ commentsNum }: IPost) {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comment} size={14} />
      <Break size={6} />
      <Text size={12}>{commentsNum}</Text>
    </button>
  );
}
