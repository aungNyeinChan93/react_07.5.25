import React from 'react';
import { Outlet } from 'react-router';

const UserPrefix = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default UserPrefix;