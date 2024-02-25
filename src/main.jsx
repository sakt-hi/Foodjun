import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.scss'
import Home from './components/Home'
import About from './components/About'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
        errorElement: <div>Error</div>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}>
        <Router>
            <App />
        </Router>
    </RouterProvider>
);
