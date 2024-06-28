import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from '../Login/Login'
import Browse from '../Browse/Browse'
const Body = () => {
  const Router = createBrowserRouter(
    [
      {
        path: "/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>
      }

    ]
  )
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default Body