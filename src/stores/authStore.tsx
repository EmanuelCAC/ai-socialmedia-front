import { create } from 'zustand'

export type AuthStore = {
  email: string | null;
  token: string | null;
  isLogged: boolean;
  aiName: string | null;
  aiContext: string | null;
  saveContext: (name: string, context: string) => void;
  login: (email: string, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  email: null,
  token: null,
  isLogged: false,
  aiName: null,
  aiContext: null,
  saveContext: (name: string, context: string) => set(() => ({ aiName: name, aiContext: context })),
  login: (email: string, token: string) => set(() => ({ email, token, isLogged: true })),
  logout: () => set(() => ({ email: null, token: null, isLogged: false })),
}))