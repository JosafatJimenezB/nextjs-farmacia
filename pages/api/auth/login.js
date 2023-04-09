import axios from "axios";
import { serialize } from "cookie";

export default async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const data = { email, password };

    try {
      const response = await axios.post(
        "https://farmacia-api-production.up.railway.app/auth/authenticate",
        data
      );

      const token = response.data;

      const serialized = serialize("UserToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 8, // 4 horas
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ message: "Metodo HTTP no permitido" });
  }
}
