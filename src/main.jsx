import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserFormProvider from './store/UserFormContext.jsx'
import UserTableProvider from './store/UserTableContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserTableProvider>
      <UserFormProvider>
        <App />
      </UserFormProvider>
    </UserTableProvider>
  </React.StrictMode>,
)
