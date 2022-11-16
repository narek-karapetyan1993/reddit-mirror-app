import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.././store/reducer';
import { IPost, PostRequestAsync } from '.././store/posts/actions';

export interface IPostData {
  posts: IPost[];
  after: string;
  loading: boolean;
  error: string;
  nextAfter: string;
  count: number;
  onClick: () => void;
}

export function usePostData() {
  const posts = useSelector<RootState, any>((state) => state.post.post);
  const after = useSelector<RootState, string>((state) => state.after);
  const loading = useSelector<RootState, boolean>((state) => state.post.loading);
  const errorLoading = useSelector<RootState, string>((state) => state.post.error);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [nextAfter, setNextAfter] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (posts.length === 0) return;
    setNextAfter(after);
    setData((prevChildren) => prevChildren.concat(...posts));
  }, [after]);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    dispatch(PostRequestAsync(nextAfter));
  }

  const postData: IPostData = {
    posts: data,
    after: after,
    loading: loading,
    error: errorLoading,
    count: count,
    nextAfter: nextAfter,
    onClick: handleClick,
  };

  return { postData };
}
