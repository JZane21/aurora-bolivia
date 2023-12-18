import Image from "next/image";
import NataC from "../../assets/NataC.png"
import AnderC from "../../assets/AnderC.png"
import JoseC from "../../assets/JoseC.png"
import IgnaC from "../../assets/IgnaC.png"
import EmaC from "../../assets/EmaC.png"
import AmyC from "../../assets/AmyC.png"

const ContactoPage = () => {
  return (
    <>
      <div className="flex flex-row w-full items-center justify-center">
        <div className="flex flex-col  rounded-3xl border-8 shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={NataC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Natalia Bilbao
          </label>
          <label className=" font-light">+591 61143115</label>
        </div>
        <div className="flex flex-col   rounded-3xl border-8 shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={AnderC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Ander Callyan
          </label>
          <label className=" font-light">+591 62449894 </label>
        </div>
        <div className="flex flex-col   rounded-3xl border-8  shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={JoseC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Jose Carrasco
          </label>
          <label className=" font-light">591 67004903</label>
        </div>
        <div className="flex flex-col   rounded-3xl border-8  shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={IgnaC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Ignacio Lizarazu
          </label>
          <label className=" font-light">+591 68150005</label>
        </div>
        <div className="flex flex-col   rounded-3xl border-8  shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={EmaC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Emanuel Lozano
          </label>
          <label className="font-light">+ 591 76710956</label>
        </div>
        <div className="flex flex-col  rounded-3xl border-8  shadow-md text-center items-center w-1/6 p-4 m-4">
        <div className="w-full flex justify-center">
        <Image
          src={AmyC}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Ambar Rojas
          </label>
          <label className="font-light">+591 67067311</label>
        </div>
      </div>
    </>
  );
};
export default ContactoPage;
