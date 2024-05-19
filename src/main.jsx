import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserFormProvider from './store/UserFormContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserFormProvider>
      <App />
    </UserFormProvider>
  </React.StrictMode>,
)
