/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import ini digunakan untuk React Router DOM
import Dashboard from './pages/Beranda/DashboardPage'
import FollowPage from './pages/Beranda/FollowPage'
import QuestionPage from './pages/Pertanyaan/QuestionPage'
import ForYouPage from './pages/Pertanyaan/ForYouPage'
import Draf from './pages/Pertanyaan/Draf'
import ForumPage from './pages/Forum/ForumPage'
import UnreadPage from './pages/Notifikasi/UnreadPage'
import JelajahiPage from './pages/Jelajahi/JelajahiPage'
import NotifikasiPage from './pages/Notifikasi/NotifikasiPage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import PasswordPage from './pages/Auth/PasswordPage'
import VerificationPage from './pages/Auth/VerificationPage'
import ChangePasswordPage from './pages/Auth/ChangePasswordPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/password',
    element: <PasswordPage />
  },
  {
    path: '/verification',
    element: <VerificationPage />
  },
  {
    path: '/changepassword',
    element: <ChangePasswordPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/follow',
    element: <FollowPage />,
  },
  {
    path: '/question',
    element: <QuestionPage />
  },
  {
    path: '/foryou',
    element: <ForYouPage />
  },
  {
    path: '/draf',
    element: <Draf />,
  },
  {
    path: '/forum',
    element: <ForumPage />
  },
  {
    path: '/jelajahi',
    element: <JelajahiPage />
  },
  {
    path: '/notif',
    element: <NotifikasiPage />
  },
  {
    path: '/unread',
    element: <UnreadPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)