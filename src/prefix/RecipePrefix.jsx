import React from 'react';
import { Outlet } from 'react-router';

const RecipePrefix = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default RecipePrefix;