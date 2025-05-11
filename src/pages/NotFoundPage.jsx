import React from 'react';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <section className='flex justify-center items-center w-full h-screen'>
                <h1 className='text-3xl text-white font-bold'><strong className='text-red-600'>404</strong> not found!</h1>
            </section>
        </React.Fragment>
    );
};

export default NotFoundPage;