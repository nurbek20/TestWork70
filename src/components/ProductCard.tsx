import { Product } from '@/types';
import styles from '../styles/components/ProductCard.module.scss';

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <div className={styles.card}>
            <img src={product.thumbnail} alt={product.title}/>
            <h3>{product.title}</h3>
            <p className={styles.category}>{product.category.toUpperCase()}</p>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
    );
}
