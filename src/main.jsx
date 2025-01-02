import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css';
import MainLayout from './layouts/MainLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout></MainLayout>
  </StrictMode>
);