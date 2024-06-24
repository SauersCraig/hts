import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import "./Login.styels.css";
export function Login({ setToken }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [resetPassword, setRestPassword] = useState(false);
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
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;

      setToken(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <>
      {!resetPassword && (
        <div>
          <h1 className="headerTY">Sign in to Vote</h1>
          <form onSubmit={handleSubmit} className="formContainer">
            <input
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              name="email"
              className="inputSignUp"
            />
            <input
              type="password"
              placeholder="Your Password"
              onChange={handleChange}
              name="password"
              className="inputSignUp"
            />
            <button type="submit" className="subBtn">
              Login
            </button>
          </form>
        </div>
      )}
      {resetPassword && (
        <div className="formContainer">
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
        </div>
      )}
      <p
        onClick={() => setRestPassword(!resetPassword)}
        className="signUpText resetPassText"
      >
        {resetPassword ? "Login" : "Reset my password"}
      </p>
      <p className="signUpText">
        Don't have an account? <Link to="/SignUp">Signup for an account.</Link>
      </p>
    </>
  );
}
