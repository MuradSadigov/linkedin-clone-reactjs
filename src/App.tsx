import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Home/Header";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { auth } from "../firebase";
import Modal from "./components/Modals/Modal";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });
    // Clean up subscription on unmount.
    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        {!user && <Route path="/signup" element={<SignUp />} />}
        {user && (
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
