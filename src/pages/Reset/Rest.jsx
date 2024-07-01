import { supabase } from "../../client";
import "./Rest.styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Rest() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.name]: value });
  }

  const sendResetPassword = async () => {
    try {
      const { data: resetData, error } =
        await supabase.auth.resetPasswordForEmail(loginData.email, {
          redirectTo: `${window.location.href}ResetPassword`,
        });
      setSuccess(true);
    } catch (error) {}
  };

  return (
    <div className="formContainer">
      <h1>Enter you email to reset your password.</h1>
      <input
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        name="email"
        className="inputSignUp"
      />
      {success && (
        <p className="signUpText">
          Success! Check your email to reset your password.
        </p>
      )}
      <button onClick={sendResetPassword} className="subBtn restBtn">
        Reset Password
      </button>
      <p className="signUpText">
        <Link to="/GoldenTomato">Back to Login</Link>
      </p>
      <p className="signUpText">
        Don't have an account? <Link to="/SignUp">Signup for an account.</Link>
      </p>
    </div>
  );
}

export default Rest;
