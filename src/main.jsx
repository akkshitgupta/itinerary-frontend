import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
  {
    path: "",
    element: <App />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "signup",
    element: <SignupPage />
  }
]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>
)
