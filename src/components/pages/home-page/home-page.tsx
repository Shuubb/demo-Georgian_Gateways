import styles from './home-page.module.scss';
import mainBanner from '../../../assets/background.svg'
import DummyImg from '../../../assets/DummyImg.jpg'
import { Product, Products } from '../../product/product';


const products:Product[] = [
    {image: DummyImg, name: 'Kakheti', link: '/'}
]

export function HomePage(){
    return (
        <div className={styles.root}>
            <div className={styles.mainBannerContainer}>
                <img src={mainBanner} alt='mainBanner'></img>
            </div>
            <h1 className={styles.title}>Have An Adventure Of Your Life!</h1>
            <div className={styles.productList}>
                <Products products={products} />
            </div>
        </div>
    );
};
