import { Products } from '../../product/product';
import styles from './home-admin-page.module.scss';

export function HomeAdminPage(){
    return (
        <div className={styles.root}>
            <div className={styles.sidebar}>
            </div>
            
            <Products products={[]} />
            
            <div className={styles.panel}>
                <form className={ styles.createPost }>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="text" name="postsName" id="postsName" />
                    <button name="submit" id="submitButton" >Submit</button>
                </form>
            </div>

        </div>
    );
};
