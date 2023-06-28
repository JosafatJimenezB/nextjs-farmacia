import axios from "axios";

export default async function productsHandler(req, res) {
  const { UserToken } = await req.cookies;

  try {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${UserToken}`,
        "Content-Type": "applicaton/json",
      },
    });
    const products = await instance.get("/api/order");

    res.status(200).json(products.data);
  } catch (error) {
    console.log("No se encontraron productos");
  }
}
