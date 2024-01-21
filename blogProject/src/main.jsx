import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import { Provider } from 'react-redux'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
)


