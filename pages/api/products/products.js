import axios from "axios";

export default async function productsHandler(req, res) {
  const { UserToken } = await req.cookies;

  const instance = axios.create({
    baseURL: "https://farmacia-api-production.up.railway.app",
    headers: {
      Authorization: `Bearer ${UserToken}`,
      "Content-Type": "applicaton/json",
    },
  });
  const products = await instance.get("/products");

  res.status(200).json(products.data);
}
