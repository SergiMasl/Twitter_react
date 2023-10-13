import React from "react";
import { useContext } from "react";
import AuthContext from "../../contents/AuthContext";

export default function SingUp() {
  const { setAuthenticated } = useContext(AuthContext);
  //   const handleLogin = () => setAuthenticated(true);
  //   const handleLogout = () => setAuthenticated(false);

  return (
    <div>
      <p>welcome to SingUP</p>
      <button onClick={() => setAuthenticated(true)}>login</button>
      <button onClick={() => setAuthenticated(false)}>logout</button>
    </div>
  );
}
