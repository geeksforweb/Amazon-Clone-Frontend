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