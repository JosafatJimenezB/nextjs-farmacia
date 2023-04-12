import axios from "axios";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import Products from "./components/Products/Products";

function Dashboard(products) {
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

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Salir</button>
      <Toaster />
      <div>
        <Products />
      </div>
    </div>
  );
}

export default Dashboard;
