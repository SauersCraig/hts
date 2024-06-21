import { useState } from "react";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
export function ResetPassword() {
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });
  function handleChange(event) {
    const value = event.target.value;
    setPassword({ ...password, [event.target.name]: value });
  }
  const confirmPasswords = async () => {
    const pass = password.pass;
    const confirmPass = password.confirmPass;

    if (pass !== confirmPass) return alert("Your passwords do not match");
    const { data: resetData, error } = await supabase.auth.updateUser({
      password: pass,
    });
  };
  return (
    <div>
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
    </div>
  );
}
