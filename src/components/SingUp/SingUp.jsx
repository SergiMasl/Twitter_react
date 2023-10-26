import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contents/AuthContext";
import "./sinup.css";

export default function SingUp() {
  const { setAuthenticated } = useContext(AuthContext);
  //   const handleLogin = () => setAuthenticated(true);
  //   const handleLogout = () => setAuthenticated(false);
  const [name, setNameSing] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [usePhone, setUsePhone] = useState(true);

  const signUp = (e) => {
    e.preventDefault();
    console.log(name);
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential, "++++");
    //   })
    //   .catch((error) => {
    //     console.log(error, "<<<<<");
    //   });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDateOfBirth((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const onChangeInput = () => {
    setUsePhone(!usePhone);
    setEmail("");
    // user.email = "";
    setPhone("");
    // user.phone = "";
  };

  return (
    <div className="container">
      <div className="singup-container">
        <div className="singup-header">X</div>
        <p>Create account</p>
        <form className="sign-up-form" onSubmit={signUp}>
          <input
            type="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setNameSing(e.target.value)}
            required
          ></input>
          {usePhone ? (
            <input
              type="Phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
          ) : (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          )}
          <p onClick={() => onChangeInput()}>
            {usePhone ? "Use Email" : "Use Phone"}
          </p>
          <h3 className="sing-up--bdya">Date of Birth</h3>
          <p className="sing-up--bdya-description">
            This information will not be publicly available. Verify your age,
            even if the account is for a company, pet, etc.
          </p>
          <div>
            <label htmlFor="month">Month:</label>
            <input
              type="number"
              id="month"
              name="month"
              value={dateOfBirth.month}
              onChange={handleInputChange}
              min="1"
              max="12"
            />

            <label htmlFor="day">Day:</label>
            <input
              type="number"
              id="day"
              name="day"
              value={dateOfBirth.day}
              onChange={handleInputChange}
              min="1"
              max="31"
            />

            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={dateOfBirth.year}
              onChange={handleInputChange}
              min="1900" // Assuming a reasonable minimum year
              max="2099" // Assuming a reasonable maximum year
            />

            {/* <p>Date of Birth: {dateOfBirth.month}/{dateOfBirth.day}/{dateOfBirth.year}</p> */}
          </div>
          <button type="submit">Sign in</button>
        </form>
        {/* <button onClick={() => setAuthenticated(true)}>login</button>
        <button onClick={() => setAuthenticated(false)}>logout</button> */}
      </div>
    </div>
  );
}
