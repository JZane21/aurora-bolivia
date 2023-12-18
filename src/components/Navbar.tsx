"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  };

  return (
    <div>
      <nav className="bg-blue-500 border-gray-200">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
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
            <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse ">
              <li>
                <Link
                  className="block py-2 px-3 text-white bg-blue-700 rounded"
                  href="/inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-white bg-blue-700 rounded"
                  href="/quienes-somos"
                >
                  ¿Quienes Somos?
                </Link>
              </li>
              <li>
                <button
                  onMouseOver={() => showDepartments(true)}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
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
                    className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
                          href="/departamentos/ceo"
                        >
                          Departamento de CEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
                          href="/departamentos/desarrollo"
                        >
                          Departamento de Desarrollo
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
                          href="/departamentos/seguridad"
                        >
                          Departamento de Seguridad Informática
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
                          href="/departamentos/evaluacion"
                        >
                          Departamento de Evaluación Técnica
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
                          href="/departamentos/marketing"
                        >
                          Departamento de Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block py-2 px-3 text-white bg-blue-700 rounded"
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
                  className="block py-2 px-3 text-white bg-blue-700 rounded"
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
