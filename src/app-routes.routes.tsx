import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Pricing } from './pages/pricing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
])
