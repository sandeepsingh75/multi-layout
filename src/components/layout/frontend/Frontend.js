
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/HeaderTop/Header';

function Frontend(props) {
    return (
        <div>
            {/* Frontend */}
            {/* <Header /> */}
            <Outlet />
        </div>
    );
}

export default Frontend;