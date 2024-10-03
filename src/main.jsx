import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error from './Error.jsx'

import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "login/",
    element: <Login/>,
  },
  {
    path: "Signup/",
    element: <Signup/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
