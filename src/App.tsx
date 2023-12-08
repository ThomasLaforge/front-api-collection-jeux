import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Connexion from './routes/Connexion'
import Home from './routes/Home'
import Page from './components/Page'
import Register from './routes/Register'
import ChangePassword from './routes/ChangePassword'

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
  },
  {
    path: '/change-password',
    element: <Page protectedPage={true} Content={ChangePassword} />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
