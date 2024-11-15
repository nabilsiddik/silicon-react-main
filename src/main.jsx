import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact';

const routes = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      children: [
          {
              path: '/',
              element: <Home/>
          },
          {
              path: '/contact',
              element: <Contact/>
          }
      ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes}></RouterProvider>
  </React.StrictMode>,
)
