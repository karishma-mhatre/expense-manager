import React from 'react';
import Balance from '../Balance/Balance';
import './header.scss';

const Header = () => {
    return (
        <div className="container header">
            <div className="logo">EXPENSE MANAGER</div>
            <Balance></Balance>
        </div>
    );
}

export default Header;