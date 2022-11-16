import React, { useRef } from 'react';
import styles from './cardpreview.css';
import { IPost } from '../../../../store/posts/actions';

export function CardPreview({ postPreviewSrc }: IPost) {
  function viewPreview() {
    if (
      postPreviewSrc === undefined ||
      (!postPreviewSrc.endsWith('.jpg') &&
        !postPreviewSrc.endsWith('.jpeg') &&
        !postPreviewSrc.endsWith('.gif') &&
        !postPreviewSrc.endsWith('.png'))
    ) {
      return 'https://i.postimg.cc/CKcFLyWp/Velutto-1.webp';
    } else {
      return postPreviewSrc;
    }
  }

  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={viewPreview()} alt="post preview" />
    </div>
  );
}
