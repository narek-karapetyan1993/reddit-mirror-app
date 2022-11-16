import { atom, } from 'recoil';

export const commentTextState = atom({
  key: 'commentTextState', 
  default: 'Оставьте ваш комментарий!(recoil)',
});