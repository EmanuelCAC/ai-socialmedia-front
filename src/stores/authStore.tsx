import { create } from 'zustand'

export type AuthStore = {
  email: string | null;
  isLogged: boolean;
  login: (email: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  email: null,
  isLogged: false,
  login: (email: string) => set(() => ({ email, isLogged: true })),
  logout: () => set(() => ({ userName: null, isLogged: false })),
}))