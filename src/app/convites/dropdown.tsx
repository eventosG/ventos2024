"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AiOutlineFilter } from "react-icons/ai";
const TEInput = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEInput)
);
const TEPopover = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEPopover)
);
const TEPopoverContent = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEPopoverContent)
);
const TEPopoverToggler = dynamic(() =>
  import("tw-elements-react").then((res) => res.TEPopoverToggler)
);
const TERipple = dynamic(() =>
  import("tw-elements-react").then((res) => res.TERipple)
);
const TESelect = dynamic(() =>
  import("tw-elements-react").then((res) => res.TESelect)
);
const data = [
  { text: "Seleccionar", value: 1 },
  { text: "Floral", value: 1 },
  { text: "Clássico", value: 2 },
  { text: "Vintage", value: 3 },
];
const data2 = [
  { text: "Seleccionar", value: 1 },
  { text: "PVC", value: 1 },
  { text: "Cartolina", value: 2 },
  { text: "Acrílico", value: 3 },
  { text: "Digital", value: 3 },
];
export default function DropDown() {
  return (
    <>
      <div className="flex space-x-1">
        <TEPopover title="Filtrar">
          <TERipple rippleColor="light">
            <TEPopoverToggler className="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
              <AiOutlineFilter className="text-xl" />
            </TEPopoverToggler>
          </TERipple>

          <TEPopoverContent placement="bottom">
            <div className="p-4 text-[#212529] rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden dark:text-white dark:border-0 dark:bg-neutral-700">
              <div className="mb-2">
                <p>Preços</p>
              </div>
              <div className="flex flex-row gap-2">
                <TEInput
                  type="text"
                  id="exampleFormControlInput1"
                  label="Preço Minimo"
                ></TEInput>
                <TEInput
                  type="text"
                  id="exampleFormControlInput1"
                  label="Preço Máximo"
                ></TEInput>
              </div>
              <div className="mb-2">
                <p>Categorias</p>
                <TESelect data={data} />
              </div>
              <div className="mb-2">
                <p>Material</p>
                <TESelect data={data2} />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                >
                  Filtrar
                </button>
              </div>
            </div>
          </TEPopoverContent>
        </TEPopover>
      </div>
    </>
  );
}
