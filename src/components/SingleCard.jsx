import React from 'react';
import { Link } from 'react-router';

const SingleCard = ({ id, title, body }) => {
    return (
        <React.Fragment>
            <article
                className="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4 dark:border-gray-700 dark:bg-gray-900"
            >
                <p className="block text-xs text-gray-500 dark:text-gray-400">
                    {title}
                </p>

                <Link to={`posts/${id}`}>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                        {body}
                    </h3>
                </Link>
            </article>
        </React.Fragment>
    );
};

export default SingleCard;