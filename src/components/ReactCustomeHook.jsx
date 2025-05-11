import React from 'react';
import useGetData from '../hooks/useGetData';
import SingleCard from './SingleCard';

const ReactCustomeHook = () => {
    const { data, isError, isLoading } = useGetData(`https://jsonplaceholder.typicode.com/posts`)

    if (isError) {
        return (
            <div>
                {isError ? <p>Is error</p> : null}
            </div>
        )
    }
    return (
        <React.Fragment>
            <section className='w-full min-h-screen bg-red-200 text-black'>
                <h1 className='text-center text-2xl p-2'>ReactCustomeHook</h1>
                {
                    isLoading ? (<div>
                        <p>Loading</p>
                    </div>) : (<div className='grid grid-cols-4 gap-4 my-2 mx-10'>
                        {
                            data?.map(post => {
                                return <SingleCard {...post} />
                            })
                        }
                    </div>)
                }

            </section>
        </React.Fragment>
    );
};

export default ReactCustomeHook;