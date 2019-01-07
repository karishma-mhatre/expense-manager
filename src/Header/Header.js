import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles['header']}>
            <div>Expense Manager</div>
        </div>
    );
}

export default Header;