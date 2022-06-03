import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import HeaderBottom from '../../Header/HeaderBottom/HeaderBottom';
import Header from '../../Header/HeaderTop/Header';

function Backend(props) {
    return (
        <div>
            {/* Backend */}
            <Header />
            <HeaderBottom />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Backend;