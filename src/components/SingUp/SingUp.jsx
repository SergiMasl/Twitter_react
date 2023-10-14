import React, {useState} from "react";
// import { useContext } from "react";
// import AuthContext from "../../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SingUp() {
//   const { setAuthenticated } = useContext(AuthContext);
  //   const handleLogin = () => setAuthenticated(true);
  //   const handleLogout = () => setAuthenticated(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential, "++++");
      })
      .catch((error) => {
        console.log(error, "<<<<<");
      });
  };

  return (
    <div>
            <form className="sign-in" onSubmit={signUp}>
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
              <button type="submit">Sign up</button>
            </form>
            <h3>Already have an account?</h3>
            <div className="create-account">
              <button>Create account</button>
            </div>

      {/* ----------------------------------------------- */}
      {/* // <p>welcome to SingUP</p>
      // <button onClick={() => setAuthenticated(true)}>login</button>
      // <button onClick={() => setAuthenticated(false)}>logout</button> */}
    </div>
  );
}
