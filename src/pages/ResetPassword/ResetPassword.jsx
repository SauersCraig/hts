import { useState } from "react";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.styles.css";
export function ResetPassword() {
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });
  let navigate = useNavigate();
  function handleChange(event) {
    const value = event.target.value;
    setPassword({ ...password, [event.target.name]: value });
  }
  const confirmPasswords = async () => {
    const pass = password.pass;
    const confirmPass = password.confirmPass;
    let path = "/GoldenTomato";
    if (pass !== confirmPass) return alert("Your passwords do not match");
    const { data: resetData, error } = await supabase.auth.updateUser({
      password: pass,
    });
    navigate(path);
  };
  return (
    <div className="formContainer">
      <h1>Reset Password</h1>
      <input
        type="password"
        placeholder="Your Password"
        onChange={handleChange}
        name="pass"
        className="inputSignUp"
      />
      <input
        type="password"
        placeholder="Confirm Your Password"
        onChange={handleChange}
        name="confirmPass"
        className="inputSignUp"
      />
      <button className="subBtn" onClick={confirmPasswords}>
        Reset Password
      </button>
    </div>
  );
}
