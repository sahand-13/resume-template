import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/main';
import Home from '../pages/Home';

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home />, index: true },
        {
          path: 'Tasks',
          element: <>hello</>,
        },
      ],
    },
  ]);
}

export default Router;
