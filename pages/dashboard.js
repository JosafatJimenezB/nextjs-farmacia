import axios from "axios";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      router.push("/login");
    } catch (err) {
      router.push("/login");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("/api/products/products");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Salir</button>
      <br></br>
      <button onClick={() => getData()}>Obtener datos</button>
    </div>
  );
}

export default Dashboard;
