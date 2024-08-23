"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const TETextarea = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEDropdown = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEDropdownToggle = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEDropdownMenu = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEDropdownItem = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TERipple = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEInput = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TECarousel = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TECarouselItem = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const listServicos = [
  { servico: "Lobolo", preco: "3.000.00" },
  { servico: "Sociais", preco: "3.000.00" },
  { servico: "Noivado", preco: "3.000.00" },
  { servico: "Casamento", preco: "3.000.00" },
  { servico: "Aniversário", preco: "3.000.00" },
  { servico: "Depedida de Solteiro", preco: "3.000.00" },
];
export default function Convites() {
  const [isSelected, setIsSelected] = useState("Todos Convites");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isFiltroSelected, setIsFiltroSelected] = useState(false);
  const [productOneProduct, setProductOneProduct] = useState(false);
  const [isConviteClicked, setIsConviteCliced] = useState(false);

  useEffect(() => {}, []);

  function Preco() {
    setIsFiltroSelected(true);
    setSelectedProduct("Preço");
  }
  function Material() {
    setIsFiltroSelected(true);
    setSelectedProduct("Material");
  }

  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="flex flex-col">
          <div className="h-screen block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="font-bold text-center mb-1">Tipo de Convites</p>
            <hr />
            {/* Os convites devem aparecer em uma caixa  */}
            {isConviteClicked ? (
              <>
                {listServicos.map((item) => (
                  <>
                    <p
                      className="mb-1 hover:text-sky-600 cursor-pointer"
                      onClick={() => setIsSelected(item.servico)}
                    >
                      {item.servico}
                    </p>
                  </>
                ))}
              </>
            ) : (
              <>
                <p
                  className="mb-1 hover:text-sky-600 cursor-pointer"
                  onClick={() => setIsConviteCliced((env) => !env)}
                >
                  Convites
                </p>
                <p className="mb-1 hover:text-sky-600 cursor-pointer">
                  Cartão de Instruções
                </p>
                <p className="mb-1 hover:text-sky-600 cursor-pointer">
                  Identificador de Mesas
                </p>
                <p className="mb-1 hover:text-sky-600 cursor-pointer">
                  Caderno de Dedicatória
                </p>
              </>
            )}
          </div>
        </div>
        <div className="block col-span-5 w-full">
          <div className="mx-4">
            <div className="flex justify-center">
              <div className="mt-3 xl:w-96">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* Produtos */}
            <div className="text-center font-bold text-xl mb-4">
              {isSelected}
            </div>
            <div className="flex justify-end">
              {isFiltroSelected ? (
                <>
                  {selectedProduct === "Preço" && (
                    <>
                      <div className="flex flex-row gap-4 w-80">
                        <TEInput
                          type="number"
                          id="exampleFormControlInput1"
                          label="Minimo"
                        ></TEInput>
                        <TEInput
                          type="number"
                          id="exampleFormControlInput1"
                          label="Máximo"
                        ></TEInput>
                        <div>
                          <button
                            onClick={() => setIsFiltroSelected((prev) => !prev)}
                            type="button"
                            className="inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {selectedProduct === "Material" && (
                    <>
                      <TEDropdown>
                        <TERipple>
                          <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none">
                            Material
                            <span className="ml-2 [&>svg]:w-5 w-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </TEDropdownToggle>
                        </TERipple>
                        <TEDropdownMenu>
                          <TEDropdownItem>
                            <a
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              PVC
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Cartolina
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Virtual
                            </a>
                          </TEDropdownItem>
                        </TEDropdownMenu>
                      </TEDropdown>
                    </>
                  )}
                  {selectedProduct === "Classificação" && <></>}
                </>
              ) : (
                <>
                  {isSelected === "Todos Convites" ? (
                    <></>
                  ) : (
                    <>
                      <TEDropdown>
                        <TERipple>
                          <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none">
                            Filtrar Por
                            <span className="ml-2 [&>svg]:w-5 w-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </TEDropdownToggle>
                        </TERipple>
                        <TEDropdownMenu>
                          <TEDropdownItem>
                            <a
                              onClick={() => Preco()}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Preço
                            </a>
                          </TEDropdownItem>
                          <TEDropdownItem>
                            <a
                              onClick={() => Material()}
                              href="#"
                              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                            >
                              Material
                            </a>
                          </TEDropdownItem>
                        </TEDropdownMenu>
                      </TEDropdown>
                    </>
                  )}
                </>
              )}
            </div>
            <div>
              {isSelected === "Lobolo" && (
                <>
                  <div className="flex flex-row justify-between mt-4">
                    <h3 className="font-bold cursor-pointer">Floral</h3>
                    {/* Número de convidados feitos/confirmados */}
                    <h3 className="text-sm">0/10</h3>
                  </div>
                  <hr />
                  <div className="flex justify-end"></div>
                </>
              )}
            </div>
            <div className="mt-4">
              {isSelected === "Todos Convites" ? (
                <>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div className="flex flex-row justify-between font-bold mt-2">
                        <p>Pedido de Confirmação</p>
                        <p>0</p>
                      </div>
                    </div>
                    <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <p className="font-bold text-center">
                        Convidados Confirmados
                      </p>
                      <div className="flex flex-row justify-between">
                        <div>
                          <p>Online: 0</p>
                        </div>
                        <div>
                          <p>Presencial: 0</p>
                        </div>
                      </div>
                    </div>
                    <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div className="flex flex-col font-bold mt-2">
                        <p className="text-center">Realizar Convites</p>
                        <div className="flex flex-row justify-between">
                          <div>
                            <button
                              type="button"
                              onClick={() => setIsSelected("Lobolo")}
                              className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                              Presencial
                            </button>
                          </div>
                          <div>
                            {/* Ao clicar deverá abrir uma pagina para o envio do link */}
                            <button
                              type="button"
                              className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                              Online
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TECarousel showControls ride="carousel">
                    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                      <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      >
                        <Image
                          height={400}
                          width={900}
                          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                          className="block w-full"
                          alt="..."
                        />
                      </TECarouselItem>
                      <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      >
                        <Image
                          height={400}
                          width={900}
                          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                          className="block w-full"
                          alt="..."
                        />
                      </TECarouselItem>
                      <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      >
                        <Image
                          height={400}
                          width={900}
                          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                          className="block w-full"
                          alt="..."
                        />
                      </TECarouselItem>
                    </div>
                  </TECarousel>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <a href="/convitesPage">
                        <Image
                          height={400}
                          width={900}
                          onClick={() => setProductOneProduct((prev) => !prev)}
                          className="rounded-t-lg"
                          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                          alt=""
                        />
                      </a>
                      <div className="py-2">
                        <p className="font-bold text-center">Nome do Convite</p>
                        <p className="text-center">Tipo</p>
                        <h5 className="mt-4 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Preço: 0.00
                        </h5>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            {isSelected === "Lobolo" && (
              <>
                <div className="flex flex-row justify-between mt-14 mx-4">
                  <h3 className="font-bold cursor-pointer">Clássicos</h3>
                  <h3 className="text-sm"></h3>
                </div>
                <hr className="mx-4" />
                <div className="grid grid-cols-5 gap-4 mt-4 mx-4">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <a href="/convitesPage">
                      <Image
                        height={400}
                        width={900}
                        onClick={() => setProductOneProduct((prev) => !prev)}
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                        alt=""
                      />
                    </a>
                    <div className="py-2">
                      <p className="font-bold text-center">Nome do Convite</p>
                      <p className="text-center">Tipo</p>
                      <h5 className="mt-4 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Preço: 0.00
                      </h5>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
