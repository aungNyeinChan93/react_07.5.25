import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MasterLayout />,
        children: [
            { index: true, Component: HomePage },
            { path: 'about', Component: AboutPage },
            { path: 'test', Component: TestPage },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    },

])

export default router;