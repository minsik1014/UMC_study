import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/1', element: <Page1 /> },
  { path: '/2', element: <Page2 /> },
  { path: '/3', element: <Page3 /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
