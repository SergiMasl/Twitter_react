import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import LoginPage from "./components/login/LoginPage";
import SingUp from "./components/SingUp/SingUp";
import { useContext, useState } from "react";
import AuthContext from "./contexts/AuthContext";

function App() {
  // const [isLog, setIsLog] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <div> user is {`${authenticated ? "" : "not"} authenticated`} </div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
        <div className="create-account">
          <button >Create account</button>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
