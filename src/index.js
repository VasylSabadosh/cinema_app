import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import store from "./redux-store/configStore";
import {BrowserRouter} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId={'647527749052-5dehs9e91eirvendv66b7v07aej30m5n.apps.googleusercontent.com'}>
            <App />
          </GoogleOAuthProvider>

        </BrowserRouter>
    </Provider>

   // </React.StrictMode>
);

