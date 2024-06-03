import "./signIn.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInBtn from "../../components/buttons/SignInBtn";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };
  return (
    <div className="signIn__div">
      <form onSubmit={handleSubmit}>
        <div className="signIn__title">
          <h2>Sign in</h2>
        </div>
        <div className="signIn__inputDiv">
          <label htmlFor="username">Username</label>

          <input
            type="text"
            minLength={3}
            name="username"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="signInBtn__div">
          <SignInBtn>Sign In</SignInBtn>
        </div>
      </form>
    </div>
  );
}
