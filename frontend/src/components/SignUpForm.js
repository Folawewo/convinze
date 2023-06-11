import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Interest:", interest);
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Sign Up/In</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Interest:
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Sign Up/In
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
