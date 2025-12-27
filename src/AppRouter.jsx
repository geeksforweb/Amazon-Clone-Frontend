import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"; // Importing React Router components for routing
import Landing from "./Pages/Landing/Landing"; // Importing the Landing (home) page component
import Auth from "./Pages/Auth/Auth"; // Importing the SignIn page component
import Payment from "./Pages/Payment/Payment"; // Importing the Payment page component
import Orders from "./Pages/Orders/Orders"; // Importing the Orders page component
import Cart from "./Pages/Cart/Cart"; // Importing the Cart page component  
import Results from "./Pages/Results/Results"; // Importing the Results page component for displaying category results
import ProductDetail from './Pages/ProductDetail/ProductDetail'; // Importing the Product Detail page component
import ProtectedRoute from "./Componets/ProtectedRoute/ProtectedRoute"; // Importing the ProtectedRoute component for route protection
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51ShWBUQOZAd5pdzlSVUOHVfW8jQLCsJBNAisvSwHG3NolVeqi26kqAlpLgFW6FtpNKsQDkdVmR20i2MmqmOfKpjk00KsJugIsp"
);
// Main application router component that defines all routes

function AppRouter() {
  return (
    <Router basename="/Amazon-Clone-Frontend-and-Backend--2025">
      {/* {this are used as BrowserRouter } */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/payments" element={<Payment />} />
         */}

        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to Access Orders"}
              redirect={"/Orders"}>
                <Orders />
            </ProtectedRoute>
          }
        />

        {/* Category results */}
        <Route path="/category/:categoryName" element={<Results />} />

        {/* Single product page */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default AppRouter
