import { useState } from "react";
import {
  RiBugLine,
  RiShoppingCartLine,
  RiShoppingBag3Line,
  RiParentLine,
  RiUserLine,
} from "react-icons/ri";
import Logout from "../Logout/Logout";
import Products from "../Products/Products";

const Menu = () => {
  const [currentSection, setCurrentSection] = useState("productos");

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen grid grid-cols-6">
      <nav className="col-span-1 px-3 py-5 bg-slate-200">
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
        {currentSection === "ventas" && <p>Ventas</p>}
        {currentSection === "clientes" && <h1>Clientes</h1>}
        {currentSection === "empleados" && <h1>Empleados</h1>}
      </div>
    </div>
  );
};

export default Menu;
