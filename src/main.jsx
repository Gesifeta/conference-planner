import React from 'react'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
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
      path: "/home/add-ons",
      element: <Addon />
    }
    ,
    {
      path: "/home/meals",
      element: <Meal />
    }
    , {
      path: "/home/detail",
      element: <Detail />
    }
  ]
}
])
//configure store
const store = configureStore({
  reducer: {
  }
})
//this section contains the main app

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
