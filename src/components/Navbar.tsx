"use client";

import Link from "next/link";
import { useState } from "react";
import loguito from "../assets/loguito.jpeg"
import Image from "next/image";
const Navbar = () => {
  const [show, setShow] = useState(false);
  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Uso
  async function exampleUsage() {
    console.log("Inicio de la tarea");

    // Espera 3 segundos
    await sleep(3000);

    console.log("Fin de la tarea después de 3 segundos");
  }
  const showDepartments = (value: boolean) => {
    setShow(value);
    console.log(show);
  };
  return (
    <div>
      <nav className="bg-[#151419] shadow-lg shadow-black">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={loguito}
              className="h-8 w-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
              Aurora
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="flex row items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse ">
              <li>
                <Link
                  className="block py-2 px-3 text-white hover:text-[#FD6262]"
                  href="/inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-white hover:text-[#FD6262]"
                  href="/quienes-somos"
                >
                  ¿Quienes Somos?
                </Link>
              </li>
              <li>
                <button
                  onMouseOver={() => showDepartments(true)}
                  onMouseOut={() => showDepartments(false)}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3  text-white hover:text-[#FD6262] "
                >
                  Departamentos{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {show && (
                  <div
                    onMouseOver={() => showDepartments(true)}
                    onMouseOut={() => showDepartments(false)}
                    id="dropdownNavbar"
                    className="z-10 font-normal bg-[#151419] divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/ceo"
                        >
                          Departamento de CEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/desarrollo"
                        >
                          Departamento de Desarrollo
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/seguridad"
                        >
                          Departamento de Seguridad Informática
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/evaluacion"
                        >
                          Departamento de Evaluación Técnica
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/marketing"
                        >
                          Departamento de Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white hover:text-[#FD6262]"
                          href="/departamentos/legal"
                        >
                          Departamento de Legal
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  className="block py-2 px-3 text-white hover:text-[#FD6262]"
                  href="/contacto"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
