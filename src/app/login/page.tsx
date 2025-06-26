'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.scss';
import { useAuthStore } from '@/store/auth';
import api from '@/lib/api';
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (username.length < 3 || password.length < 3) {
            setError('Username and password must be at least 3 characters');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const res = await api.post('/auth/login', { username, password });
            login(res.data);
            router.push('/');
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'Login failed');
            } else {
                setError('Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
