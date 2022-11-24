import React from 'react';
import NavBar from './NavBar'
import Switchlight from './Switchlight'
const Layout = ({ children }) => {
    return (
        <div>
            <Switchlight/>
            <NavBar/>
            {children}
        </div>
    );
}

export default Layout;
