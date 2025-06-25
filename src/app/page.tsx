'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import api from '@/lib/api';
import styles from './Home.module.scss';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await api.get(`https://dummyjson.com/products?limit=12&skip=${skip}`);
      const newProducts = res.data.products;
      setProducts((prev) => [...prev, ...newProducts]);

      setSkip((prev) => prev + 12);
      if (newProducts.length < 12) {
        setHasMore(false);
      }
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchProducts();
          }
        },
        { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [observerRef.current, hasMore]);

  const content = (
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Products</h2>
        <div className={styles.grid}>
          {products.map((product,index) => (
              <ProductCard key={index} product={product} />
          ))}
        </div>
        {loading && <p className={styles.message}>Loading...</p>}
        {!loading && hasMore && (
            <div ref={observerRef} className={styles.loadMoreTrigger} />
        )}
        {!hasMore && <p className={styles.message}>No more products.</p>}
      </div>
  );

  return <ProtectedRoute>{content}</ProtectedRoute>;
}
