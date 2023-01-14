import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutRoot from './components/root/LayoutRoot'
import HomePages from './pages/home'
import NotFoundPage from './pages/error/404'
import LoginPage from './pages/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    // loader: rootLoader,
    children: [
      {
        path: '/',
        element: <HomePages />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
