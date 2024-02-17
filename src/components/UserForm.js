import React from "react";
import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPssword, setValidPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const emailHandler = (event) => {
    console.log("USER EMAIL", event.target.value);
    const providedEmail = event.target.value;
    setEmail(providedEmail);
    setValidEmail(toCheckValidEmail(providedEmail));
  };
  const toCheckValidEmail = (providedEmail) => {
    console.log("provided email", providedEmail);
    const parts = providedEmail.split("@");
    console.log("PARTS", parts);
    if (parts.length !== 2) {
      return false;
    }

    const [localPart, domainPart] = parts;

    if (
      localPart.trim() === "" ||
      domainPart.trim() === "" ||
      !domainPart.includes(".") ||
      !domainPart.includes("com")
    ) {
      return false;
    }

    return true;
  };

  const passwordHandler = (event) => {
    const providedPassword = event.target.value;
    setPassword(providedPassword);
    setValidPassword(toCheckValidPassword(providedPassword));
  };

  const toCheckValidPassword = (providedPassword) => {
    console.log("provided password", providedPassword);
    if (providedPassword.length >= 8) {
      return true;
    }
  };

  const confirmPasswordHandler = (event) => {
    const providedConfirmPassword = event.target.value;
    setConfirmPassword(providedConfirmPassword);
    setValidConfirmPassword(toCheckConfirmPassword(providedConfirmPassword));
  };

  const toCheckConfirmPassword = (providedConfirmPassword) => {
    console.log("provided confirm password", providedConfirmPassword);
    if (providedConfirmPassword === password) {
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validEmail && validPssword && validConfirmPassword) {
      alert("Form submitted successfully!");
    } else {
      alert("Can’t submit the form :(");
    }
  };

  return (
    <div className="main-container">
      <div
        className="online-img-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/onlineLearning.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "50%",
          height: "99vh",
        }}
      >
        <p className="description">
          Unlock a world of knowledge!{" "}
          <span style={{ color: "blue" }}> SIGN UP</span> to explore courses,
          connect with experts, and track your progress. Your learning adventure
          awaits—
          <span style={{ color: "red" }}>SIGN UP now!</span>
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="signup-img-container">
            <img
              className="auth-img"
              src="/images/sign.jpg"
              alt="authentication image"
            />
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <br />
            <input
              onChange={emailHandler}
              type="email"
              value={email}
              id="userEmail"
              style={{
                borderColor: validEmail ? "green" : "red",
                marginBottom: validEmail ? "20px" : "0",
              }}
            />
            {!validEmail && <p>Invalid email format</p>}
          </div>

          <div>
            <label htmlFor="userPassword">Password</label>
            <br />
            <input
              onChange={passwordHandler}
              type="password"
              id="userPassword"
              style={{
                borderColor: validPssword ? "green" : "red",
                marginBottom: validEmail ? "20px" : "0",
              }}
            />
            {!validPssword && <p>Password must be at least 8 characters</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              onChange={confirmPasswordHandler}
              type="password"
              id="confirmPassword"
              style={{
                borderColor: validConfirmPassword ? "green" : "red",
                marginBottom: validEmail ? "20px" : "0",
              }}
            />
            {!validConfirmPassword && <p>Passwords do not match</p>}
          </div>

          <div className="button-container">
            <button
              type="submit"
              style={{ marginTop: validEmail ? "20px" : "0" }}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
