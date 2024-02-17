import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from "redux-persist"
import store from './services/store.js';
import { RouterProvider } from 'react-router-dom';
import router from './services/router.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <RouterProvider router={router} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
