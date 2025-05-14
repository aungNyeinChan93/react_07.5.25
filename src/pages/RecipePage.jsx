import React from 'react';
import useGetData from '../hooks/useGetData'
import Recipes from '../components/Recipes';

const RecipePage = () => {
    const recipesUrl = 'https://dummyjson.com/recipes';
    const { data: { recipes }, isError, isLoading } = useGetData(recipesUrl);
    console.log(recipes);
    return (
        <React.Fragment>
            {isLoading ? (<h1 className='text-2xl text-white text-center mt-10'>Loading ...</h1>) : null}
            {isError ? (<h1>{isError}</h1>) : null}
            {
                recipes && <Recipes recipes={recipes} />
            }

        </React.Fragment>
    );
};

export default RecipePage;