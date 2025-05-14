import React from 'react';
import { useParams } from 'react-router';
import useGetData from '../hooks/useGetData';
import SingleRecipe from '../components/SingleRecipe';
import { Link } from 'react-router';

const DetailRecips = () => {
    const { id } = useParams();
    const { data: recipe, isLoading, isError } = useGetData(`https://dummyjson.com/recipes/${id}`);

    return (
        <React.Fragment>
            <div className='grid grid-cols-1 sm:grid-cols-2 mx-[150px] border border-lime-300 mt-10 rounded-2xl shadow-lime-400'>
                {isLoading ? (<h1 className='text-2xl text-white text-center mt-10'>Loading ...</h1>) : null}
                {isError ? (<h1>{isError}</h1>) : null}
                {
                    Object.keys(recipe).length ? (<section className=' mx-auto py-10'>
                        <SingleRecipe recipe={recipe} />
                        <Link to={'/recipes'} className='px-4  py-2 rounded bg-amber-400 '>Back</Link>
                    </section>) : null
                }
                {Object.keys(recipe).length ? <section className='px-10 mt-[75px]'>
                    <div>
                        <p className='text-2xl text-amber-300 font-bold'>{recipe.name}</p>
                        <div className='mt-4 mb-1'>
                            {recipe?.tags.map(tag => {
                                return <span className='px-2 py-1 bg-lime-300 rounded-2xl text-black mx-2  '>{tag}</span>
                            })}
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <section>
                                <p className='text-xl my-2 capitalize font-bold border-b w-fit border-b-amber-300'>ingredients</p>
                                <ul>
                                    {recipe?.ingredients.map((ingredient, index) => {
                                        return <li className='text-md text-gray-300' key={index}>{ingredient}</li>
                                    })}
                                </ul>
                            </section>
                            <section>
                                <p className='text-xl my-2 capitalize font-bold border-b w-fit border-b-amber-300'>instructions</p>
                                <ul>
                                    {recipe?.instructions.map((instruction, index) => {
                                        return <li className='text-sm text-gray-300' key={index}>{instruction}</li>
                                    })}
                                </ul>
                            </section>
                        </div>
                    </div>
                </section> : null}
            </div>
        </React.Fragment>
    );
};

export default DetailRecips;