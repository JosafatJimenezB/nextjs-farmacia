import axios from "axios";
import { serialize } from "cookie";
import { toast } from "react-hot-toast";

export default async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const data = { email, password };

    try {
      const response = await axios.post(
        "https://farmacia-api-production.up.railway.app/auth/authenticate",
        data
      );

      const token = response.data.replace(/%22/g, "");

      const serialized = serialize("UserToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "none",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      res.status(200).json(response.data);
      toast.success("Bienvenido");
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error al enviar datos a la api externa" });
      toast.error("Datos incorrectos");
    }
  } else {
    res.status(401).json({ message: "Metodo HTTP no permitido" });
    toast.error("Metodo HTTP no permitido");
  }
}
