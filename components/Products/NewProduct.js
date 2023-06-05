import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("image", image);

      const product = { name, description, price, quantity, image };

      const response = await axios.post("/api/products/newproduct", product);
      router.push("/dashboard");
      console.log(response);
      toast.success("Producto registrado con éxito");
    } catch (err) {
      toast.error("¡Error al registrar el producto! \n Intente nuevamente");
    }
  };

  return (
    <>
      <h2 className="text-2xl text-center mt-16">New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Cantidad"
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <input
          accept="image/*"
          type="file"
          placeholder="Upload Image"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button className="border-2 bg-teal-400 px-5 py-3" type="submit">
          Guardar Producto
        </button>
      </form>

      <div>
        <h3>Nombre del producto: {name}</h3>
        <h3>Descripción: {description}</h3>
        <h3>Precio: {price}</h3>
        <h3>Cantidad: {quantity}</h3>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default NewProduct;
