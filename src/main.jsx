import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './styles/tailwind.css';
import router from './routers/router';
import MainLayout from './layouts/MainLayout';
import { AuthProvider } from './contexts/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
        <MainLayout></MainLayout>
      </AuthProvider>
    </RouterProvider>
  </StrictMode>
);