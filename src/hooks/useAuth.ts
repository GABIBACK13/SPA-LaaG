// src/hooks/useAuth.ts
import { useRecoilState } from 'recoil';
import { authState, AuthData } from '../store/Recoil/authState';

export default function useAuth() {
  const [auth, setAuth] = useRecoilState(authState);

  const login = (data: AuthData) => setAuth(data);
  const logout = () => setAuth({ token: null, user: null });

  return {
    auth,
    login,
    logout,
    isAuthenticated: !!auth.token,
  };
}
