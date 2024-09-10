import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider, } from "react-router-dom"
import App from '../App.jsx'
import Root from "./root.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);