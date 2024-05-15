import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/pages/Root';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
import Details from './components/pages/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddServices from './components/pages/AddServices';
import Manage from './components/pages/Manage';
import Update from './components/Update';
import AllServices from './components/pages/AllServices';
import MyBook from './components/pages/MyBook';
import BookRequest from './components/pages/BookRequest';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () =>fetch(`${import.meta.env.VITE_API_URL}/services`),
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/signup",
      element:<Signup></Signup>,
      },
      {
        path:"/details/:id",
      element:<PrivateRoute><Details></Details></PrivateRoute>,
       loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`),
      },
      {
        path:"/add",
      element:<PrivateRoute><AddServices></AddServices></PrivateRoute>,
      },
      {
        path:"manage",
      element:<PrivateRoute><Manage></Manage></PrivateRoute>,
      },
      {
        path:"services",
      element:<AllServices></AllServices>,
      // loader:() =>fetch(`${import.meta.env.VITE_API_URL}/services`)
      },
      {
        path:"/myBook",
      element:<PrivateRoute><MyBook></MyBook></PrivateRoute>,
      },
      {
        path:"/bookRequests",
      element:<BookRequest></BookRequest>,
      },
      {
        path:"/update/:id",
      element:<PrivateRoute><Update></Update></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider> 
    </AuthProvider>
  </React.StrictMode>,
)
