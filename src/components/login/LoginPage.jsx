import React, { useState } from "react";
import "../login/LoginPage.css";
import { RiTwitterXLine } from "react-icons/ri";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential, "++++");
      })
      .catch((error) => {
        console.log(error, "<<<<<");
      });
  };

  const handleClick = () => {

	// return <Rou>Hello!</Rou>
	console.log('click')
  }

  return (
    <div className="wrapper">
      <div id="login-logo">
        <RiTwitterXLine />
      </div>
      <div>
        <div className="login-side">
          <h1>Happening now</h1>
          <h5>Join now.</h5>
          <form className="sign-in" onSubmit={signIn}>
            <input
              type="email"
              placeholder="Phone, email, or username "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <button type="submit">Sign in</button>
          </form>
          <h3>Already have an account?</h3>
          <div className="create-account">
            <button onClick={handleClick}>Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
