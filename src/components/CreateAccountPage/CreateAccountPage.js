import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import "./CreateAccountPage.css";

const CreateAccountPage = ({ onCreateAccount }) => {
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2 className="login-form-title">Create Account</h2>
        <CreateAccountForm onSignup={onCreateAccount} />
      </div>
    </div>
  );
};

export default CreateAccountPage;
