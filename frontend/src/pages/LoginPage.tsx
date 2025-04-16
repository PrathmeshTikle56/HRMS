import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import InputField from "../components/common/InputField";
import Button from "../components/common/ButtonComp";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
    // Handle the response from Google here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login with email and password
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <Button name="Login" />
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">or</span>
        </div>
        {/* <div className="mt-4">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google client ID
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className="w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
