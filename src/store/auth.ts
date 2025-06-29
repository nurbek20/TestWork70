import { create } from 'zustand';

interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
    image?: string;
}

interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
}));

