import React from 'react';
import styles from './userblock.css';
import { EColor, EIcons } from '../../../enumeration';
import { Icon } from '../../../Icon';
import { Break } from '../../../Break';
import { Text } from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {

  function viewAvatar() {
    if (
      avatarSrc === undefined ||
      (!avatarSrc.endsWith('.jpg') &&
        !avatarSrc.endsWith('.jpeg') &&
        !avatarSrc.endsWith('.gif') &&
        !avatarSrc.endsWith('.png'))
    ) {
      return 'https://www.redditstatic.com/avatars/avatar_default_05_FF4500.png';
    } else {
      return avatarSrc;
    }
  }

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_stringG&redirect_uri=${process.env.REDIRECT_NAME}&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img src={viewAvatar()} alt="user avatar" className={styles.avatarImage} />
        ) : (
          <Icon name={EIcons.anon} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.grey99}>
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}
