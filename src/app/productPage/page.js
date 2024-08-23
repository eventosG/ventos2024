"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
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
export default function Servicos() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="flex flex-col col-span-3">
          <div className="my-12 flex justify-center">
            <Image
              height={400}
              width={900}
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
            <div>
              <Image
                height={400}
                width={900}
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block w-full col-span-3 my-10">
          <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="font-bold text-center mb-1">
              Nome do Produto/Serviço
            </p>
            <hr />
            <div className="w-1/2">
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Caixa de Velocidade:</h3>
                </div>
                <div>
                  <h3>Manual</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Nr. de Lugares:</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>SunRuf:</h3>
                </div>
                <div>
                  <h3>Não</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Cor:</h3>
                </div>
                <div>
                  <h3>Branco</h3>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <div>
                  <h3>Decoração:</h3>
                </div>
                <div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    Incluso
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Matricula Personalizada:</h3>
                </div>
                <div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowModal2(true)}
                  >
                    Incluso
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Motorista:</h3>
                </div>
                <div className="flex flex-row">
                  <TEDropdown>
                    <TERipple>
                      <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none">
                        Incluso
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
                          Femanino
                        </a>
                      </TEDropdownItem>
                      <TEDropdownItem>
                        <a
                          href="#"
                          className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
                        >
                          Masculino
                        </a>
                      </TEDropdownItem>
                    </TEDropdownMenu>
                  </TEDropdown>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Preçário</h3>
            <hr />
            <div className="w-1/2">
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Número de Dias:</h3>
                </div>
                <div className="w-1/3">
                  <TEInput
                    type="number"
                    id="exampleFormControlInputNumber"
                    label="Dias"
                    max={4}
                    min={1}
                  ></TEInput>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-end font-bold text-2xl">
              <h3>Total: 0,00</h3>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Notas</h3>
            <hr />
            <div className="w-full">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable.
              </p>
            </div>
            <div className="mt-12 flex justify-end font-bold text-2xl">
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <TEModal show={showModal2} setShow={setShowModal2}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Matricula Personalizada
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal2(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal2(false)}
                >
                  Ok
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Decoração
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Ok
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
