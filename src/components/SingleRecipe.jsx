import React from 'react';
import { Link } from 'react-router';

const SingleRecipe = ({ recipe }) => {
    return (
        <React.Fragment>
            <section className="flex justify-center py-8 items-center max-w-full">
                <div className="card-container">
                    <Link to={`/recipes/${recipe?.id}`}>
                        <div className="card dark:bg-gray-900 rounded-xl px-4 border border-gray-300 hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100">
                            <div className="img-avatar-container flex flex-wrap space-y-2 pt-4 space-x-4 opacity-80">
                                {recipe?.mealType[0]}
                            </div>
                            <h2 className="text-black dark:text-white w-64 font-bold leading-6 tracking-normal py-4">{recipe?.name}🔥</h2>
                            <p className="text-gray-500 text-sm">{recipe?.cuisine}</p>
                            <div className="img-container pb-8">
                                <img src={recipe?.image} className="h-44 rounded-md shadow-lg mt-4 object-cover  w-full" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SingleRecipe;