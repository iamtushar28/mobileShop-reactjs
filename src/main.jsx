import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/User/Home.jsx';
import Catelog from './pages/User/Catelog.jsx'
import Detailpage from './pages/User/Detailpage.jsx';
import Cart from './pages/User/Cart.jsx'
import Wishlist from './pages/User/Wishlist.jsx';
import Checkout from './pages/User/Checkout.jsx';
import OrderHistory from './pages/User/OrderHistory.jsx';
import OrderConfirmed from './pages/User/OrderConfirmed.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/catelog',
    element: <Catelog />
  },
  {
    path: '/details',
    element: <Detailpage />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/wishlist',
    element: <Wishlist />
  },
  {
    path: '/order',
    element: <OrderHistory />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/order-confirmed',
    element: <OrderConfirmed />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
