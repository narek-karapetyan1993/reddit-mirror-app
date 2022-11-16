import React, { useEffect, useRef } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { IPost } from '../../store/posts/actions';
import { generateRandomString } from '../../utils/react/generateRandomIndex';
import { usePostData, IPostData } from '../../hooks/usePostData';
import { useToken } from '../../hooks/useToken';
import { ModalPost } from '../ModalPost';
import { Route, Routes } from 'react-router-dom';

export function CardsList() {
  const { postData } = usePostData();
  const token = useToken();
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

      <Routes>
        <Route path=":id" element={<ModalPost posts={postData.posts} />} />
      </Routes>

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
