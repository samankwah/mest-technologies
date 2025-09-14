import { Navbar, Footer, FloatingButtons } from "./components"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import {
  Auth,
  Callback,
  Home,
  Cart,
  Products,
  SingleProduct,
  Error,
  Checkout,
  ProtectedRoute,
  Completion,
  Features,
  Services,
  News,
} from "./pages"
import ReactGA from "react-ga4"

const measurementID = "G-Y1EV1Q38PH"

ReactGA.initialize(measurementID, {
  gaOptions: {
    cookieFlags: 'samesite=none;secure',
  },
  gtagOptions: {
    send_page_view: false,
    cookie_flags: 'samesite=none;secure',
  },
})

const AppContent = () => {
  const location = useLocation()

  // Define auth routes where navbar and footer should be hidden
  const authRoutes = ['/auth', '/callback', '/login/callback']
  const isAuthPage = authRoutes.includes(location.pathname)

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/login/callback" element={<Callback />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completion"
          element={
            <ProtectedRoute>
              <Completion />
            </ProtectedRoute>
          }
        />

        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <FloatingButtons />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
