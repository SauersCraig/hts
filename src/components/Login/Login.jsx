import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import "./Login.styels.css";
export function Login({ setToken }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.name]: value });
  }

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
      <div>
        <h1 className="headerTY">Sign in to Vote</h1>

        <p className="smallerSignUpText">
          Create an account, then sign in to vote for your favorite restaurant.
          You can vote once a day from July 18th -July 28th. The winning
          restaurant in each city will receive the coveted Golden Tomato Award.
          Winning restaurants will receive a custom Duke's Golden Tomato Award
          trophy and bragging rights. Voting opens July 18th. Winners will be
          announced on July 30th!
        </p>
        {/* <p className="signUpText">
          Don't have an account?
          <Link to="/SignUp"> Create an account.</Link>
        </p> */}
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
      <a className="createAccount" href="/SignUp">
        Create Account
      </a>
      <p className="signUpText">
        <Link to="/Rest">Reset Password</Link>
      </p>
    </>
  );
}
