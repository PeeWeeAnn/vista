import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Auth from '@/pages/Auth';
import SignUp from '@/pages/SignUp';
import LogIn from '@/pages/LogIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/auth',
    element: <Auth/>,
  },
  {
    path: '/signup',
    element: <SignUp/>,
  },
  {
    path: '/login',
    element: <LogIn/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
);
