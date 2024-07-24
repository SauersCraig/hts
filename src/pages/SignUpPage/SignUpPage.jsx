import "./SignUpPage.styles.css";
import { useState } from "react";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Rankings from "../../components/Rankings/Rankings";
export function SignUpPage() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conFirmPassword: "",
  });
  const [optIn, setOptIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  function toggleCheckBox() {
    setOptIn(!optIn);
  }
  function handleChange(event) {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.conFirmPassword) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              opt_in: optIn,
            },
          },
        });
        if (error) throw error;
        navigate("/GoldenTomato");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    } else {
      alert("Passwords Did Not Match");
    }
  }
  return (
    <div className="signUpContainer">
      <h1 className="headerTY">Create an account to vote</h1>
      <form onSubmit={handleSubmit} className="formContainer ">
        <input
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          className="inputSignUp"
        />
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          className="inputSignUp"
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
          className="inputSignUp"
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          className="inputSignUp"
        />
        <input
          placeholder="Confirm Password"
          name="conFirmPassword"
          type="password"
          onChange={handleChange}
          className="inputSignUp"
        />
        <label className="checkboxLabel">
          <input
            type="checkbox"
            name="optIn"
            checked={optIn}
            onChange={() => toggleCheckBox()}
            className="checkbox"
          />
          Yes, sign me up for Duke's TWANG TALK newsletter, stuffed with special
          offers, new products, merch drops & more!
        </label>
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
      <p className="signUpText">
        Already have an account?
        <Link to="/GoldenTomato">Login to your account.</Link>
      </p>
      <Rankings />
    </div>
  );
}
