import React from "react";
import "./LoginForm.scss"; // Assuming you have the form.css file in the same directory

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., login authentication
    // You can access the form field values using event.target.elements
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="loginpage" style={{ minHeight: "80vh"}}>
    <div className="box" style={{ height:"500px" }}>
      <span className="borderline"></span>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input type="text" name="username" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" name="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" name="password" required />
          <span>Confirm Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="login">LogIn</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>

    </div>
  );
};

export default SignupForm;
