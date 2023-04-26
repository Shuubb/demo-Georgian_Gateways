import styles from './product.module.scss';

export interface Product {
    image: string;
    name: string;
    link: string;
}

interface ProductProps {
    products: Product[]
}

export function Products(props: ProductProps): JSX.Element {
    return (
        <>
        {props.products.map((product) => (
            <div className={ styles.product }>
                <img src={product.image} alt={product.name}></img>
                <a href={product.link}>{product.name}</a>
            </div>
        ))}
        </>
    );
};
