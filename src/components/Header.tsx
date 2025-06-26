'use client';

import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';
import { useAuthStore } from '@/store/auth';
import Image from 'next/image';

export default function Header() {
    const { user, logout } = useAuthStore();

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.contacts}>
                    <span>📞 +021-95-51-84</span>
                    <span>📧 shop@abelohost.com</span>
                    <span>📍 1734 Stonecoal Road</span>
                </div>
                <div className={styles.auth}>
                    {user ? (
                        <>
                            <span>{user.firstName} {user.lastName}</span>
                            {user.image && <Image
                                src={user.image}
                                width={32}
                                height={32}
                                alt={`${user.firstName} avatar`}
                                className={styles.avatar}/>}
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <Link href="/login">👤 Login</Link>
                    )}
                </div>
            </div>
            <div className={styles.logoRow}>
                <h1>Abelohost Shop<span className={styles.dot}>.</span></h1>
                <div className={styles.banner}>600 x 70</div>
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/">Hot Deals</Link>
                <Link href="/">Categories</Link>
                <Link href="/">Laptops</Link>
                <Link href="/">Smartphones</Link>
                <Link href="/">Cameras</Link>
                <Link href="/">Accessories</Link>
            </nav>
        </header>
    );
}
