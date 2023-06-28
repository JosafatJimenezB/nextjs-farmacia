import axios from "axios";

export default async function productsHandler(req, res) {
  const { UserToken } = await req.cookies;

  if (req.method === "POST") {
    const { name, description, price, quantity, image } = req.body;
    const data = { name, description, price, quantity, image };
    console.log(body);

    try {
      const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          Authorization: `Bearer ${UserToken}`,
          "Content-Type": "applicaton/json",
        },
      });

      const response = await instance.post("/products", data);

      res.status(200).json(response.data);
      console.log(response);
    } catch (error) {
      res.status(401).json(error);
      console.log(response);
    }
  } else {
    res.status(401).json({ message: "Metodo HTTP no permitido" });
  }
}
