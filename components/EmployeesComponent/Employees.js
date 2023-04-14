import { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "../Skeleton/Skeleton";
import Notfound from "../Skeleton/Notfound";
import "react-loading-skeleton/dist/skeleton.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/employees/employees")
      .then((response) => {
        console.log(response);
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Sin productos");
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h2 className="mb-10 text-2xl text-start text-teal-500">Empleados</h2>
      <table className="text-center min-w-full mx-auto border-2 border-teal-700">
        <tr className="border-2 border-teal-700">
          <th>Id</th>
          <th>Nombre</th>
          <th>Puesto</th>
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
            employees.map((employee, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{employee.id}</td>
                <td className="px-2 py-2">{employee.name}</td>
                <td className="px-2 py-2">{employee.job}</td>
                <td className="px-2 py-2 text-center">{employee.email}</td>
                <td className="px-2 py-2 text-center">{employee.number}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {employees.length === 0 && !loading && <Notfound />}
    </div>
  );
};

export default Employees;
