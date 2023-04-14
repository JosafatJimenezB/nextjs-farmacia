import { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "../Skeleton/Skeleton";
import Notfound from "../Skeleton/Notfound";
import "react-loading-skeleton/dist/skeleton.css";

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/sales/sales")
      .then((response) => {
        console.log(response);
        setSales(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Sin productos");
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h2 className="mb-10 text-2xl text-start text-teal-500">Ventas</h2>
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
            sales.map((sale, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{sale.id}</td>
                <td className="px-2 py-2">{sale.name}</td>
                <td className="px-2 py-2">{sale.description}</td>
                <td className="px-2 py-2 text-center">{sale.price}</td>
                <td className="px-2 py-2 text-center">{sale.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {sales.length === 0 && !loading && <Notfound />}
    </div>
  );
};

export default Sales;
