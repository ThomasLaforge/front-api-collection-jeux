import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Connexion from './routes/Connexion'
import Home from './routes/Home'
import Page from './components/Page'
import Register from './routes/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page protectedPage={false} Content={Connexion} />,
  },
  {
    path: '/home',
    element: <Page protectedPage={true} Content={Home} />
  },
  {
    path: '/register',
    element: <Page protectedPage={false} Content={Register} />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
