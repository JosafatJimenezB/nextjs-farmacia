import axios from "axios";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

function Dashboard() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      router.push("/login");
      toast.success("Sesión cerrada con éxito");
    } catch (err) {
      router.push("/login");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("/api/products/products");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Salir</button>
      <Toaster />
      <br></br>
      <button onClick={() => getData()}>Obtener datos</button>
    </div>
  );
}

export default Dashboard;
