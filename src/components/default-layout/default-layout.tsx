import styles from './default-layout.module.scss';
import { NavBar } from '../nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';

export function DefaultLayout(){
    return (
        <div className={styles.root}>
            <NavBar />
            <Outlet />
            <footer>
                <hr />
            </footer>
        </div>
    );
};
