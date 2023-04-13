import { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "../Skeleton/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/products/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Sin productos");
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h2 className="mb-10 text-2xl text-center text-teal-500">Productos</h2>
      <table className="text-center min-w-full mx-auto border-2 border-teal-700">
        <tr className="border-2 border-teal-700">
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
        <tbody className="px-2">
          {loading ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton animation="wave" />
              <ProductSkeleton animation="wave" />
              <ProductSkeleton animation="wave" />
              <ProductSkeleton animation={false} />
            </>
          ) : (
            products.map((product, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{product.id}</td>
                <td className="px-2 py-2">{product.name}</td>
                <td className="px-2 py-2">{product.description}</td>
                <td className="px-2 py-2 text-center">{product.price}</td>
                <td className="px-2 py-2 text-center">{product.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
