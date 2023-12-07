import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Connexion from './routes/Connexion'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />,
  },
  {
    path: '/home',
    element: <Home />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
