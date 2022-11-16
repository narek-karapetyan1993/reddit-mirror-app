import React, { useEffect, useState } from 'react';
import styles from './userlink.css';
import { Text } from '../../../../Text';
import { EColor } from '../../../../enumeration';
import { IPost } from '../../../../../store/posts/actions';
import { useAuthorData, IAuthorData } from '../../../../../hooks/useAuthorData';

export function UserLink({ author }: IPost) {
  const { authorData } = useAuthorData(author || '');
  const [data, setData] = useState<IAuthorData>({});

  function isEmptyObj(obj: object) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    setData(authorData);
  }, [authorData]);

  function viewAvatar() {
    if (
      data.iconImg === undefined ||
      (!data.iconImg.endsWith('.jpg') &&
        !data.iconImg.endsWith('.jpeg') &&
        !data.iconImg.endsWith('.gif') &&
        !data.iconImg.endsWith('.png'))
    ) {
      return 'https://www.redditstatic.com/avatars/avatar_default_05_FF4500.png';
    } else {
      return data.iconImg;
    }
  }

  return (
    <>
      {!isEmptyObj(data) && (
        <div className={styles.userLink}>
          <img src={viewAvatar()} alt="аватар" className={styles.avatar} />

          <a
            href="src/shared/CardsList/Card/CardHeader/UserLink/UserLink#user-url"
            className={styles.username}
          >
            <Text size={14} mobileSize={10} color={EColor.orange}>
              {data.name}
            </Text>
          </a>
        </div>
      )}
    </>
  );
}
