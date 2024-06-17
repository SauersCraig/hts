import "./SignUpPage.styles.css";
import { useState } from "react";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        },
      });
      if (error) throw error;
      navigate("/GoldenTomato");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <div>
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
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
