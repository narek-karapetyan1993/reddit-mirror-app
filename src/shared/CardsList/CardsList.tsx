import React, { useEffect, useRef } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { IPost } from '../../store/posts/actions';
import { generateRandomString } from '../../utils/react/generateRandomIndex';
import { IPostData } from '../../hooks/usePostData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

interface IModalPosts {
  postData: IPostData;
}

export function CardsList({ postData }: IModalPosts) {
  const token = useSelector<RootState, string>((state) => state.token);
  const endList = useRef(null);

  useEffect(() => {
    if (token === '' || token === null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          postData.onClick();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (endList.current) observer.observe(endList.current);

    return () => {
      if (endList.current) observer.unobserve(endList.current);
    };
  }, [postData.nextAfter, token]);

  return (
    <>
      {postData.posts.length === 0 && !postData.loading && postData.error === '' && (
        <div className={styles.emptyPost}>{'Нет ни одного поста'}</div>
      )}

      {postData.posts.length > 0 && (
        <ul className={styles.cardsList}>
          {postData.posts.map((post: IPost) => (
            <Card
              key={generateRandomString()}
              id={post.id}
              author={post.author}
              postTitle={post.postTitle}
              postPreviewSrc={post.postPreviewSrc}
              dateCreate={post.dateCreate}
              commentsNum={post.commentsNum}
              carmaUps={post.carmaUps}
            />
          ))}
        </ul>
      )}

      {postData.loading && <div className={styles.loading}>Загрузка...</div>}

      {postData.error !== '' && (
        <div className={styles.errorLoading}>{postData.error.toString()}</div>
      )}

      {postData.count !== 0 &&
      postData.count % 2 === 0 &&
      !postData.loading &&
      !postData.error ? (
        <button className={styles.moreBtn} onClick={postData.onClick}>
          Загрузить ещё
        </button>
      ) : (
        <div className="ref" ref={endList} />
      )}
    </>
  );
}
