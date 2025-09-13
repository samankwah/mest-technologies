import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CartProvider } from "./context/cart/cart_context"
import { FiltersProvider } from "./context/filter/filter_context"
import { ProductsProvider } from "./context/product/products_context"
import { Auth0Provider } from "@auth0/auth0-react"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI
const audience = import.meta.env.VITE_AUTH0_AUDIENCE

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        cacheLocation="localstorage"
        useRefreshTokens={true}
        authorizationParams={{
          redirect_uri: redirectUri,
          scope: "openid profile email",
          ...(audience && { audience })
        }}
        onRedirectCallback={(appState) => {
          window.history.replaceState(
            {},
            document.title,
            appState?.returnTo || window.location.pathname
          )
        }}
      >
        <ProductsProvider>
          <FiltersProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FiltersProvider>
        </ProductsProvider>
      </Auth0Provider>
    </HelmetProvider>
  </React.StrictMode>
)
