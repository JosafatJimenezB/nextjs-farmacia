import { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "../Skeleton/Skeleton";
import Notfound from "../Skeleton/Notfound";
import "react-loading-skeleton/dist/skeleton.css";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/clients/clients")
      .then((response) => {
        console.log(response);
        setClients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Sin ventas");
        setLoading(true);
      });
  }, []);

  return (
    <div className="mx-auto w-full">
      <h2 className="mb-10 text-2xl text-start text-teal-500">Clientes</h2>
      <table className="w-full text-center min-w-full mx-auto border-2 border-teal-700">
        <tr className="border-2 border-teal-700">
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Número de contacto</th>
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
            clients.map((client, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{client.id}</td>
                <td className="px-2 py-2">{client.name}</td>
                <td className="px-2 py-2">{client.email}</td>
                <td className="px-2 py-2 text-center">{client.number}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {clients.length === 0 && !loading && <Notfound />}
    </div>
  );
};

export default Clients;
