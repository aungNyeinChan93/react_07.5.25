import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';
import NotFoundPage from './pages/NotFoundPage';
import UserPrefix from './prefix/userPrefix';
import UserPage from './pages/UserPage';
import RecipePrefix from './prefix/RecipePrefix';
import RecipePage from './pages/RecipePage';
import DetailRecips from './pages/DetailRecipe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MasterLayout />,
        children: [
            { index: true, Component: HomePage },
            { path: 'about', Component: AboutPage },
            { path: 'test', Component: TestPage },
            {
                path: 'users', element: <UserPrefix />, children: [
                    { index: true, Component: UserPage }
                ]
            },
            {
                path: 'recipes', element: <RecipePrefix />, children: [
                    { index: true, Component: RecipePage },
                    { path: ':id', Component: DetailRecips },
                ]
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    },

])

export default router;