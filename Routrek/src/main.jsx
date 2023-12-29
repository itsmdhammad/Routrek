import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import AdminLayout from './pages/admin-layout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminLayout />
  </React.StrictMode>
)