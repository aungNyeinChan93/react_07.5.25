import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MasterLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default MasterLayout;