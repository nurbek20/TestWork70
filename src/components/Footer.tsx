'use client';

import { useAuthStore } from '@/store/auth';
import styles from '../styles/components/Footer.module.scss';

export default function Footer() {
    const { user } = useAuthStore();
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {user ? (
                <p>
                    © {year} Logged as <strong>{user.email}</strong>
                </p>
            ) : (
                <p>© {year}</p>
            )}
        </footer>
    );
}
