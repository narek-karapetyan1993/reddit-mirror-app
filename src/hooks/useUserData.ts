import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { meRequestAsync } from '../store/me/actions';
import { MeState } from '../store/me/reducer';
import { useToken } from './useToken';

export function useUserData() {
  const token = useToken();
  const me = useSelector<RootState, MeState>((state) => state.me);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [token]);

  return { me };
}
