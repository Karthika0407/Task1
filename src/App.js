import React, { useState } from "react"; // Only import React once
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />;
};

export default App;

