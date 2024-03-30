import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from './Components/Home'
import { Viewdata } from './Components/Viewdata.jsx'
import { Editdata } from './Components/Editdata.jsx'
import { Adduser } from './Components/Adduser.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      }, 
      {
        path:"/Adduser",
        element:<Adduser/>

      },
      {
        path:"/user/:id/:name",
        element:<Viewdata/>
      },
      {
        path:"/user/edit/:uid/:uname",
        element:<Editdata/>
      }

    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
