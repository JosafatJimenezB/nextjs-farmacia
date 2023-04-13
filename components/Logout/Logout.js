import axios from "axios";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Logout = () => {
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
    <div className="w-auto h-auto">
      <button
        className="bg-red-600 hover:bg-red-500 duration-300 w-32 py-1 rounded-md border-0 cursor-pointer text-white flex items-center justify-center"
        onClick={logout}
      >
        <RiLogoutBoxRLine className="mr-2" />
        Logout
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Logout;
