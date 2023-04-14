import Image from "next/image";
import notdata from "public/assets/notfound.gif";

const Notfound = () => {
  return (
    <div className="w-full grid place-content-center p-6">
      <h2 className="text-center text-lg font-bold">Sin datos</h2>
      <Image src={notdata} width={200} alt="not found image" />
    </div>
  );
};

export default Notfound;
