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

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Salir</button>
    </div>
  );
}

export default Dashboard;
