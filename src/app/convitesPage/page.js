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
export default function ConviteSelected() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isCrtoesInstrucoes, setIsCrtoesInstrucoes] = useState(false);
  const [isCartaoRecepcao, setIsCartaoRecepcao] = useState(false);
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
          </div>
        </div>
        <div className="block w-full col-span-3 my-10">
          <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="font-bold text-center mb-1">Nome do Convite</p>
            <hr />
            <div className="w-1/2">
              <div className="flex justify-between mt-4">
                {/* O numero dos convites está dependente dos convites confirmados */}
                <div>
                  <h3>Total dos Convites:</h3>
                </div>
                <div>
                  <h3>5/10</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Tipo de Convite:</h3>
                </div>
                <div>
                  <h3>Lobolo</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="mr-4">
                  <h3>Cor:</h3>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="mb-4 h-6 w-6 rounded-lg bg-primary-500"></div>
                  <div className="mb-4 h-6 w-6 rounded-lg bg-success-400"></div>
                  <div className="mb-4 h-6 w-6 rounded-lg bg-secondary-900"></div>
                  <div className="mb-4 h-6 w-6 rounded-lg bg-danger-600"></div>
                  <div className="mb-4 h-6 w-6 rounded-lg bg-warning-500"></div>
                  <div className="mb-4 h-6 w-6 rounded-lg bg-info-500"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Material:</h3>
                </div>
                <div>
                  <h3>PVC</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Cartão de Instruções:</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  Modelos
                </button>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Cartão de Recepção:</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal2(true)}
                  className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  Modelos
                </button>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Identificador de Mesa:</h3>
                </div>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  Modelos
                </button>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Cartão de Recinto:</h3>
                </div>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  Modelos
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Preçário</h3>
            <hr />
            <div className="w-1/2">
              <div className="flex justify-between mt-4">
                <div>
                  <h3>Número de Convites:</h3>
                </div>
                <div className="w-1/3">
                  <TEInput
                    type="number"
                    id="exampleFormControlInputNumber"
                    label="Convites"
                    max={10}
                    min={1}
                  ></TEInput>
                </div>
              </div>
            </div>
            {isCrtoesInstrucoes && (
              <div className="w-1/2">
                <div className="flex justify-between mt-4">
                  <div>
                    <h3>Número de Cartão de Instruções:</h3>
                  </div>
                  <div className="w-1/3">
                    <TEInput
                      type="number"
                      id="exampleFormControlInputNumber"
                      label="Instruções"
                      max={10}
                      min={1}
                    ></TEInput>
                  </div>
                </div>
              </div>
            )}
            {isCartaoRecepcao && (
              <div className="w-1/2">
                <div className="flex justify-between mt-4">
                  <div>
                    <h3>Número de Cartão de Recepção:</h3>
                  </div>
                  <div className="w-1/3">
                    <TEInput
                      type="number"
                      id="exampleFormControlInputNumber"
                      label="Instruções"
                      max={10}
                      min={1}
                    ></TEInput>
                  </div>
                </div>
              </div>
            )}

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
                Cartão de Recepção
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
                <div onClick={() => setIsCartaoRecepcao(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCartaoRecepcao(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCartaoRecepcao(true)}>
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
                Cartão de Instruções
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
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
                  <Image
                    height={400}
                    width={900}
                    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                    alt=""
                  />
                </div>
                <div onClick={() => setIsCrtoesInstrucoes(true)}>
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
