import React, { useState } from "react";
import InputField from "../components/common/InputField";
import Button from "../components/common/ButtonComp";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/user.json");
      console.log(res);
      const users = await res.json();
      console.log(users);
      console.log(res);

      const user = users.find(
        (u) => u.username === email && u.password === password
      );

      if (user) {
        setErrorMsg("");
        if (user.role === "admin" || user.role === "hr") {
          navigate("/admin/dashboard");
        } else if (user.role === "employee") {
          navigate("/employee/dashboard");
        } else {
          navigate("/login");
        }
      } else {
        setErrorMsg("Invalid credentials");
      }
    } catch (err) {
      setErrorMsg("Something went wrong.");
    }
  };
  // useEffect(() => {
  //   if (user) {
  //     if (user.role === "admin"|| "hr") {
  //       navigate("/hr/dashboard");
  //     } else if (user.role === "employee") {
  //       navigate("/admin/dashboard");
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="text-red-400">{errorMsg}</p>
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
          <div>
            <p className="text-gray-500 pb-2">Forgot password</p>
          </div>
          <Button name="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
