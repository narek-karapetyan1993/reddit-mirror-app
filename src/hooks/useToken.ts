import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { saveToken } from '../store/token/action';

export function useToken() {
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);

  return token;
}
