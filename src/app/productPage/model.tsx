"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const TERipple = dynamic(() =>
  import("tw-elements-react").then((res) => res.TERipple)
);
const TEModal = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModal)
);
const TEModalDialog = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModalDialog)
);
const TEModalContent = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModalContent)
);
const TEModalHeader = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModalHeader)
);
const TEModalBody = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModalBody)
);
const TEModalFooter = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEModalFooter)
);

export default function ModelPP({
  showModal,
  setShowModal,
  setIsCrtoesInstrucoes,
}: any) {
  return (
    <>
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
    </>
  );
}
