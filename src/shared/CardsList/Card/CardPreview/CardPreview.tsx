import React from 'react';
import styles from './cardpreview.css';
import { IPost } from '../../../../store/posts/actions';

export function CardPreview({ postPreviewSrc }: IPost) {
  console.log(postPreviewSrc);
  
  function viewPreview() {
    if (
      postPreviewSrc === undefined ||
      (!postPreviewSrc.endsWith('.jpg') &&
        !postPreviewSrc.endsWith('.jpeg') &&
        !postPreviewSrc.endsWith('.gif') &&
        !postPreviewSrc.endsWith('.png'))
    ) {
      return 'https://i.guim.co.uk/img/media/720d0630e3f30534d00bb008d177d488a8fce621/0_144_3500_2100/master/3500.jpg?width=620&quality=45&dpr=2&s=none';
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
