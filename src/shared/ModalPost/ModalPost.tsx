import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './modalpost.css';
import ReactDOM from 'react-dom';
import { Text } from '../Text';
import { KarmaCounter } from '../CardsList/Card/CardControls/KarmaCounter';
import { CardPreview } from '../CardsList/Card/CardPreview';
import { FlairText } from '../CardsList/Card/CardHeader/FlairText';
import { Break } from '../Break';
import { CommentFormContainer, CommentFormFormikContainer, CommentFormRecoilContainer } from './CommentFormContainer';
import { UserLink } from '../CardsList/Card/CardHeader/UserLink';
import { CommentList } from './CommentList';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost } from '../../store/posts/actions';

interface IModalPosts {
  posts?: IPost[];
}

export function ModalPost(posts: IModalPosts) {
  const { id } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  if (!id || !posts.posts) return null;
  const postData = posts.posts.find((element) => element.id === id);
  if (postData === undefined) return null;

  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/posts');
        document.body.classList.remove('stop');
      }
    }
    document.addEventListener('click', handelClick);
    return () => {
      document.removeEventListener('click', handelClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modal} ref={ref}>
          <div className={styles.header}>
            <div className={styles.carma}>
              <KarmaCounter carmaUps={postData.carmaUps} />
            </div>
            <div className={styles.headingBlock}>
              <Text As={'h2'} size={20} mobileSize={16}>
                {postData.postTitle}
              </Text>
              <div className={styles.headingInfo}>
                <UserLink author={postData.author} />

                <Break size={8} inline />
                <Text size={14} mobileSize={16}>
                  <span className={styles.publishedLabel}>Опубликовано </span>
                  {postData.dateCreate}
                </Text>
                {postData.flairText && <FlairText flairText={postData.flairText} />}
              </div>
            </div>
          </div>
          <Break size={36} top block />
          <div className={styles.content}>
            <CardPreview postPreviewSrc={postData.postPreviewSrc} />
            <Break size={36} top block />
            {/* <CommentFormContainer /> */}
            {/* <CommentFormRecoilContainer/> */}
            <CommentFormFormikContainer />
            <CommentList postId={postData.id}></CommentList>
          </div>
        </div>
      </div>
    </>,
    node
  );
}
