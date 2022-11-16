import React, { RefObject, useContext } from "react";
import { IComment, useCommentsData } from "../../../hooks/useCommentsData";
import { CommentCard } from "./CommentCard";
import styles from "./commentlist.css";

export function CommentList({ postId }: { postId?: string }) {
  const [commentsList] = useCommentsData(postId);
  if (!commentsList) return null;

  return (
    <ul className={styles.commentList}>
      {commentsList.length > 1 &&
        commentsList.map((comment: IComment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
    </ul>
  );
}
