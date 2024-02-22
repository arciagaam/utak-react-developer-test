import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Toaster />
  </React.StrictMode>,
)
