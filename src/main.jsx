import React from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import Home from "./components/Home"
import Venue from "./components/Venue"
import Addon from "./components/Addon"
import Meal from "./components/Meal"
import Detail from "./components/Detail"
// create router browswer router
const router = createBrowserRouter([
  
    {
    path: "/",
    element: <App />,
  },
  {
  path: "/home",
  element: <Home />,
  children: [

    {
      path: "/home/venue",
      element: <Venue />
    },
    {
      path: "/home/addon",
      element: <Addon />
    }
    ,
    {
      path: "/home/meal",
      element: <Meal />
    }
    , {
      path: "/home/detail",
      element: <Detail />
    }
  ]
}
])
//this section contains the main app

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router}>
    </RouterProvider>



  </React.StrictMode>,
)
