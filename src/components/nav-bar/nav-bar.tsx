import styles from './nav-bar.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import { HomePage } from '../pages/home-page/home-page';
import { HomeAdminPage } from '../admin/home-admin-page/home-admin-page';

export interface NavBarProps {
    className?: string;
}

interface navbarLink {
    text: string;
    directTo: string;
    page: JSX.Element;
}

export const navbarLinks: navbarLink[] = [
    { text: 'Home', directTo: '/', page: <HomePage /> },
    { text: 'Admin', directTo: '/admin', page: <HomeAdminPage /> },
];

export function NavBar() {
    const [menuVisibility, setMenuVisibility] = useState(window.innerWidth > 600);
    const [buttonAngle, setButtonAngle] = useState(0)

    useEffect(() => {
        const handleResize = () => (window.innerWidth > 600 ? setMenuVisibility(true) : false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const duration = 0.3;

    return (
        <div className={ styles.root }>
            <AnimatePresence mode='wait'>
                <m.div layout className={ styles.container } transition={{ duration: duration }}>
                    <m.button
                        layout
                        className={styles.mobileMenuButton}
                        animate={{ rotate: buttonAngle }}
                        transition={{ duration: duration }}
                        onClick={() =>{ setMenuVisibility(!menuVisibility); setButtonAngle(buttonAngle == 0 ? 90 : 0) }}
                    >
                        <img
                            src="https://img.icons8.com/fluency/48/null/menu-rounded.png"
                            className={styles.mobileMenuIcon}
                        />
                    </m.button>

                    {menuVisibility && (
                        <div className={styles.linkContainer}>
                            {navbarLinks.map((link, index) => (
                                <m.a
                                    layout
                                    key={link.text.concat(' Link')}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: (duration / navbarLinks.length) * index + 0.1,
                                    }}
                                    exit={{ opacity: 0 }}
                                    className={styles.link}
                                    href={link.directTo}
                                >
                                    {link.text}
                                </m.a>
                            ))}
                        </div>
                    )}
                </m.div>
            </AnimatePresence>
        </div>
    );
};
