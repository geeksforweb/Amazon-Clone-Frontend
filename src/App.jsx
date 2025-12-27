import { useEffect, useState, useContext } from "react";
import AppRouter from './AppRouter.jsx';
import{DataContext} from './Componets/DataProvider/DataProvider.jsx';
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firebase.js';


function App() {

const [{user},dispatch]=useContext(DataContext);

  useEffect(() => {
auth.onAuthStateChanged((authUser) => {
  console.log("The user is >>> ", authUser);

  if (authUser) {
    // the user just logged in / the user was logged in

    dispatch({
      type: Type.SET_USER,
      user: authUser,
    });

  } else {
    // the user is logged out
    dispatch({
      type: Type.SET_USER,
      user: null,
    });
  }
});

  }, [])



  return (
    <>
    <AppRouter /> 
    </>
  )
}

export default App








// // import { useEffect, useState, useContext } from "react";
// // import AppRouter from './AppRouter.jsx';
// // import{DataContext} from './Componets/DataProvider/DataProvider.jsx';
// // import { Type } from './Utility/action.type.js';
// // import { auth } from './Utility/FireBAse.js';  

// 1️⃣ App.jsx (Refined & Integrated)

// ✔ Cleans up the listener
// ✔ Removes unused imports
// ✔ Works perfectly with logout

// import { useEffect, useContext } from "react";
// import AppRouter from "./AppRouter.jsx";
// import { DataContext } from "./Componets/DataProvider/DataProvider.jsx";
// import { Type } from "./Utility/action.type.js";
// import { auth } from "./Utility/firebase.js";

// function App() {
//   const [{ user }, dispatch] = useContext(DataContext);

//   useEffect(() => {
//     // Listen to Firebase auth state changes
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       dispatch({
//         type: Type.SET_USER,
//         user: authUser || null,
//       });
//     });

//     // Cleanup listener
//     return () => unsubscribe();
//   }, [dispatch]);

//   return <AppRouter />;
// }

// export default App;

// 2️⃣ Logout Component (Immediate Logout on Click)

// ❌ Do NOT use <Link />
// ✅ Use a button + async signOut
// ✅ Navigate only after signOut completes

// Logout.jsx
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { auth } from "../Utility/firebase";
// import { DataContext } from "../Componets/DataProvider/DataProvider.jsx";
// import { Type } from "../Utility/action.type.js";

// function Logout() {
//   const navigate = useNavigate();
//   const [, dispatch] = useContext(DataContext);

//   const handleLogout = async () => {
//     try {
//       // Optimistic UI update (instant logout)
//       dispatch({
//         type: Type.SET_USER,
//         user: null,
//       });

//       await signOut(auth); // wait for Firebase
//       navigate("/login", { replace: true });
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>
//       Sign Out
//     </button>
//   );
// }

// export default Logout;


// 👉 This guarantees:

// Immediate logout

// No waiting

// No flicker

// No stale auth state

// 3️⃣ Protected Route (VERY IMPORTANT)

// Without this, logout behavior can feel inconsistent.

// ProtectedRoute.jsx
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { DataContext } from "../Componets/DataProvider/DataProvider.jsx";

// function ProtectedRoute({ children }) {
//   const [{ user }] = useContext(DataContext);

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;

// Usage in AppRouter.jsx
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Dashboard from "./Pages/Dashboard";
// import Login from "./Pages/Login";

// function AppRouter() {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default AppRouter;