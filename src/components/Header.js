import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                자리있나요?
            </div>
            {/* <div className="menu">
            </div> */}
        </div>
    );
};

export default Header;