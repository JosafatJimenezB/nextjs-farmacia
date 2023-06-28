import axios from "axios";
import { serialize } from "cookie";

export default async function registerHandler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    const data = { username, email, password };
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/register",
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
      res.status(401).json(error);
    }
  } else {
    res.status(401).json({ message: "Metodo HTTP no permitido" });
  }
}
