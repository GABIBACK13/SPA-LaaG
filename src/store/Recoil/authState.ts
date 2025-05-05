// src/recoil/authState.ts
import { atom } from 'recoil';
import * as keys from '../keys';

export interface AuthData {
  token: string | null;
  user: {
    userID: number;
    username:string;
  } | null;
  isLoggedIn:boolean;
}

const localData = localStorage.getItem('auth');

export const authState = atom<AuthData>({
  key: keys.AUTH_KEY,
  default: localData ? JSON.parse(localData) : { token: null, user: null },
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        if (newValue.token) {
          localStorage.setItem('auth', JSON.stringify(newValue));
        } else {
          localStorage.removeItem('auth');
        }
      });
    },
  ],
});
