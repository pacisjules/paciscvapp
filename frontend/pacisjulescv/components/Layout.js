import React from 'react';
import NavBar from './NavBar'
import Switchlight from './Switchlight'
import Downloadcv from './Downloadcv'
const Layout = ({ children }) => {
    return (
        
        <div>
            <Downloadcv/>
            <Switchlight/>
            <NavBar/>
            {children}
        </div>
    );
}

export default Layout;
