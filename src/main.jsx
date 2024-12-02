import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/scss/styles.scss'
import './styles/fonts.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Trabalho from "./routes/Trabalho";
import ErrorPage from './routes/ErrorPage';
import SobreMim from './routes/SobreMim';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'trabalho',
        element: <Trabalho />,
      },
      {
        path: 'sobre',
        element: <SobreMim />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
