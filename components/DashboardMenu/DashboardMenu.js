import { useState } from "react";
import {
  RiBugLine,
  RiShoppingCartLine,
  RiShoppingBag3Line,
  RiParentLine,
  RiUserLine,
  RiMenu2Fill,
  RiCloseLine,
} from "react-icons/ri";
import Logout from "../Logout/Logout";
import Products from "../Products/Products";
import Clients from "../ClientsComponent/Clients";
import Employees from "../EmployeesComponent/Employees";
import Sales from "../SalesComponent/Sales";

const Menu = () => {
  const [currentSection, setCurrentSection] = useState("productos");
  const [mobile, setMobile] = useState(true);

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="min-h-screen w-full grid grid-col-1 lg:grid-cols-6 absolute">
      <nav
        className={`fixed  lg:static w-[80%] lg:w-full top-0 col-span-1 z-50
          ${mobile ? "-left-0" : "left-full"}
       h-full px-3 py-5 bg-slate-200 flex-col border-r duration-300`}
      >
        <h1 className="text-2xl my-10 text-teal-500 font-bold flex items-center justify-center">
          <RiBugLine className="mr-2" />
          Sistemas Inc
        </h1>
        <ul>
          <li className="px-3 py-2 lg:text-lg sm:text-sm md:text-md">
            <button
              className="flex items-center"
              onClick={() => handleMenuClick("productos")}
            >
              <RiShoppingCartLine className="mr-2" />
              Productos
            </button>
          </li>
          <li className="px-3 py-2 lg:text-lg sm:text-sm md:text-md">
            <button
              className="flex items-center"
              onClick={() => handleMenuClick("ventas")}
            >
              <RiShoppingBag3Line className="mr-2" />
              Ventas
            </button>
          </li>
          <li className="px-3 py-2 lg:text-lg sm:text-sm md:text-md">
            <button
              className="flex items-center"
              onClick={() => handleMenuClick("clientes")}
            >
              <RiParentLine className="mr-2" />
              Clientes
            </button>
          </li>
          <li className="px-3 py-2 lg:text-lg sm:text-sm md:text-md">
            <button
              className="flex items-center"
              onClick={() => handleMenuClick("empleados")}
            >
              <RiUserLine className="mr-2" />
              Empleados
            </button>
          </li>
        </ul>
        <div className=" my-5 py-8">
          <Logout />
        </div>
      </nav>
      <div className="w-ful p-5 col-span-5">
        {currentSection === "productos" && <Products />}
        {currentSection === "ventas" && <Sales />}
        {currentSection === "clientes" && <Clients />}
        {currentSection === "empleados" && <Employees />}
      </div>

      <button
        className="absolute top-1 right-1 text-xl bg-teal-500 p-2 text-white rounded-2xl lg:hidden duration-300"
        onClick={handleMobile}
      >
        {mobile ? <RiCloseLine /> : <RiMenu2Fill />}
      </button>
    </div>
  );
};

export default Menu;
