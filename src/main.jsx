import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Components/Root/Root'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Statics from './Components/Statics/Statics'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Home/Home'
import ProductDetails from './Components/ProductDetails/ProductDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/allProducts.json')
        
      },
      {
        path:'/Statics',
        element:<Statics></Statics>,
        loader:()=>fetch('/allProducts.json')
      },
      {
        path:'/DashBoard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/Product/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch('/allProducts.json')
      }
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
  </StrictMode>,
)
