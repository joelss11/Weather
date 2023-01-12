import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Maps from './components/Maps'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>    
        <App/>
      </div>
    ),
  },
  {
    path: "/maps",
    element: <div>
      <Maps/>
      </div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>

)
