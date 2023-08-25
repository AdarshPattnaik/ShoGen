// Main JS File:
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Bootstrap:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Importing CSS File:
import './index.css';
import './responsive.css';

// Importing App Component:
import App from './Components/App.jsx';

// Importing Providers:
import { AppProvider } from "./Context/ProductContext.jsx";
import { FilterContextProvider } from './Context/FilterContext.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);