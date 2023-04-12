import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="mb-10 text-2xl text-center text-teal-500">Productos</h2>
      <table className="mx-auto border-2 border-teal-700">
        <tr className="border-2 border-teal-700">
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-2 py-2">{product.id}</td>
            <td className="px-2 py-2">{product.name}</td>
            <td className="px-2 py-2">{product.description}</td>
            <td className="px-2 py-2 text-center">{product.price}</td>
            <td className="px-2 py-2 text-center">{product.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Products;
