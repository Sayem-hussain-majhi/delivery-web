import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route.jsx';
import AuthProvaider from './Provider/AuthProvaider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvaider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvaider>
    </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
