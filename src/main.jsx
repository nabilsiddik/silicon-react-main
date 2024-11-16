import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact';
import DarkModeProvider from './provider/DarkModeProvider.jsx'

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
    <DarkModeProvider>
      <RouterProvider router = {routes}></RouterProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
