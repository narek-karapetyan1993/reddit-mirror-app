import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '../store/reducer';
import { useSelector } from 'react-redux';

export interface IAuthorData {
  name?: string;
  iconImg?: string;
}

export function useAuthorData(username?: string) {
  const token = useSelector<RootState, string>((state) => state.token);
  const [authorData, setAuthorData] = useState<IAuthorData>({});

  useEffect(() => {
    if (
      token !== 'undefined' &&
      token !== '' &&
      token !== null &&
      username !== '' &&
      username !== '[deleted]'
    ) {
      axios
        .get(`https://oauth.reddit.com/user/${username}/about`, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const resAuthorData = resp.data;

          setAuthorData({
            name: resAuthorData.data.name,
            iconImg: resAuthorData.data.icon_img.split('?')[0],
          });
        })
        .catch(console.log);
    }
  }, [token]);

  return { authorData };
}
