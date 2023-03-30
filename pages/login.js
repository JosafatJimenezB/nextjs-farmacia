import { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post("/api/auth/login", credentials);
    console.log(response);
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="container w-3 h-4">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            name="email"
            type="email"
            placeholder="email"
            className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus: z-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          ></input>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          ></input>
          <button className="bg-blue-400">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
