import React from 'react';
import SingleRecipe from './SingleRecipe';

const Recipes = ({ recipes }) => {
    return (
        <React.Fragment>
            <section className='grid grid-cols-4  w-full h-screen'>
                {recipes.map(recipe => {
                    return <SingleRecipe recipe={recipe} />
                })}
            </section>

        </React.Fragment>
    );
};

export default Recipes;