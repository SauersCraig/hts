import "./SignUpPage.styles.css";
import { useState } from "react";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function SignUpPage() {
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
    <div className="">
      <h1 className="headerTY">Sign up for an account to Vote!</h1>
      <form onSubmit={handleSubmit} className="formContainer signUpContainer">
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
          Sign up for Twang News!
        </label>
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
      <p className="signUpText">
        Already have an account?{" "}
        <Link to="/GoldenTomato">Login to your account.</Link>
      </p>
    </div>
  );
}
