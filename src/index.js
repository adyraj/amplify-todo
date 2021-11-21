import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);
Amplify.configure({
  Auth: {
    aws_project_region: "ap-south-1",
    aws_cognito_identity_pool_id:
      "ap-south-1:09eee1a7-1361-49a9-874f-66a84e3eab61",
    aws_cognito_region: "ap-south-1",
    aws_user_pools_id: "ap-south-1_MgbUqAWdL",
    aws_user_pools_web_client_id: "4r2ap3vgirh84fukbbpebfm0a3",
    oauth: {},
    aws_cognito_username_attributes: [],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: ["EMAIL"],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: [],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: [
        "REQUIRES_LOWERCASE",
        "REQUIRES_UPPERCASE",
        "REQUIRES_NUMBERS",
        "REQUIRES_SYMBOLS",
      ],
    },
    aws_cognito_verification_mechanisms: ["EMAIL"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
