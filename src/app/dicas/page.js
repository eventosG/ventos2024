"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
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
const TEModal = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEModalDialog = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEModalContent = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEModalHeader = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEModalBody = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const TEModalFooter = dynamic(() =>
  import("tw-elements-react").then((res) => res.TECollapse)
);
const listServicos = [
  { servico: "Organização", preco: "3.000.00" },
  { servico: "Selecção de Convidados", preco: "3.000.00" },
  { servico: "Selecção de Padrinho", preco: "3.000.00" },
  { servico: "Tema do Evento", preco: "3.000.00" },
  { servico: "Data do Evento", preco: "3.000.00" },
  { servico: "Programa do Evento", preco: "3.000.00" },
];
export default function Dicas() {
  const [isSelected, setIsSelected] = useState("Todos Convites");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isFiltroSelected, setIsFiltroSelected] = useState(false);
  const [productOneProduct, setProductOneProduct] = useState(false);

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
            <p className="font-bold text-center mb-1">Dicas</p>
            <hr />
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
              <p>Dicas</p>
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
                  <p className="font-bold">Decoração</p>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-5 gap-4">
                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <a href="/inspiracaoPage">
                        <Image
                          height={400}
                          width={900}
                          // onClick={() => setProductOneProduct((prev) => !prev)}
                          className="rounded-t-lg"
                          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                          alt=""
                        />
                      </a>
                      <div className="py-2">
                        <p className="font-bold text-center">
                          Nome da Decoração
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold mt-12">Cenário</p>
                  <hr className="mb-4" />
                  <div className="grid grid-cols-5 gap-4">
                    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <a href="/inspiracaoPage">
                        <Image
                          height={400}
                          width={900}
                          // onClick={() => setProductOneProduct((prev) => !prev)}
                          className="rounded-t-lg"
                          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                          alt=""
                        />
                      </a>
                      <div className="py-2">
                        <p className="font-bold text-center">Nome do Cenário</p>
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
                    <a href="/inspiracaoPage">
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
