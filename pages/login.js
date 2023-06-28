import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/auth/login", credentials);
      router.push("/dashboard");
      toast.success("Bienvenido");
    } catch (err) {
      toast.error("¡Credenciales incorrectas! \n Intente nuevamente");
    }
  };

  return (
    <div className="h-screen mx-auto flex flex-col md:flex-row">
      <div className="hidden sm:block bg-[url('/assets/login.jpeg')] bg-center bg-cover  w-full h-72 md:w-1/2 md:h-screen md:flex md:justify-center md:items-center">
        <h2 className="backdrop-blur-md text-2xl text-fuchsia-50 py-4 px-3 sm:mx-3 sm:mt-11">
          ¿Quieres renunciar? Pues entonces es el momento de insistir más
        </h2>
      </div>
      <div className="w-full h-72 relative md:w-1/2 sm:h-screen md:flex md:justify-center md:items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto mx-auto mt-10 px-2 py-10 max-w-sm rounded-md md:w-1/2"
        >
          <h2 className="text-5xl text-center font-bold mb-3 text-teal-500 md:text-start">
            Login
          </h2>
          <p className="text-lg mb-9 text-center text-teal-500 sm:text-start">
            Incie Sesión para continuar
          </p>
          <div>
            <input
              name="username"
              type="text"
              placeholder="username"
              className="w-full mb-8 px-2 py-2 border-2 border-teal-200 rounded-md outline-teal-500"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              name="password"
              type="password"
              className="w-full mb-8 px-2 py-2 border-2 border-teal-200 rounded-md outline-teal-500"
              placeholder="password"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 duration-300 w-32 py-1 rounded-sm border-0 cursor-pointer text-white"
            >
              Login
            </button>
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
        <p className="md:absolute md:bottom-4 text-sm text-center text-teal-500">
          Desarrollado por Sistemas Inc.
        </p>
      </div>
    </div>
  );
}

export default Login;
