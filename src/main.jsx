import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './styles/tailwind.css';
import router from './routers/router';
import { AuthProvider } from './contexts/AuthProvider';
import { SearchProvider } from './contexts/SearchProvider';
import { ModeProvider } from './contexts/ModeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <ModeProvider>
          <SearchProvider>
            <RouterProvider router={router}></RouterProvider>
          </SearchProvider>
        </ModeProvider>
      </AuthProvider>
  </StrictMode>
);