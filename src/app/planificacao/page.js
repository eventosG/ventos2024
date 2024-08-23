"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const listServicos = [
  { servico: "Transporte", preco: "3.000.00" },
  { servico: "Garçom e Protocolo", preco: "3.000.00" },
  { servico: "Fotografia e Vídeo", preco: "3.000.00" },
  { servico: "Catering e Rodízio", preco: "3.000.00" },
  { servico: "Doces e Salgados", preco: "3.000.00" },
  { servico: "Sobremesas", preco: "3.000.00" },
  { servico: "Telas e Projectores", preco: "3.000.00" },
];
const listServicos2 = [
  { servico: "Mestre de Ceremónia", preco: "3.000.00" },
  { servico: "Local de Celebração", preco: "3.000.00" },
  { servico: "Líquidos e Cocktails", preco: "3.000.00" },
  { servico: "Brindes", preco: "3.000.00" },
  { servico: "Iluminação e Palco Luminoso", preco: "3.000.00" },
  { servico: "Decoração e Cenário", preco: "3.000.00" },
  { servico: "Lua-de-Mel", preco: "3.000.00" },
];
const listServicos3 = [
  { servico: "DJ e Som", preco: "3.000.00" },
  { servico: "Fumo e Fogo de Artifício", preco: "3.000.00" },
  { servico: "Pula-Pula, Baloiços e Afins", preco: "3.000.00" },
  { servico: "Palhaços e Diversão Infantil", preco: "3.000.00" },
  { servico: "Tendas, Licras e Truss", preco: "3.000.00" },
  { servico: "Vestuário", preco: "3.000.00" },
  { servico: "Música e Manifestações Culturais", preco: "3.000.00" },
];
const listServicos4 = [
  { servico: "Cabelo e MakeUp", preco: "3.000.00" },
  { servico: "Joias e Bijuterias", preco: "3.000.00" },
  { servico: "Buquê e Flores", preco: "3.000.00" },
  { servico: "Escolta e Cortesia", preco: "3.000.00" },
  { servico: "Streaming", preco: "3.000.00" },
  { servico: "Convites", preco: "3.000.00" },
  { servico: "Wellcome Drink", preco: "3.000.00" },
];
const data2 = {
  labels: ["Red", "Blue", "Yellow", "Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Serviços",
      data: [300, 50, 100, 300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
export default function Planificacao() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="flex flex-col col-span-1">
          <div className="h-screen block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            {isClicked ? (
              <>
                <p className="font-bold text-center mb-4">
                  Serviços Seleccionados
                </p>
                {listServicos3.map((item) => (
                  <>
                    <div
                      key={item.servico}
                      className="flex flex-row justify-between mb-2 block rounded-lg bg-white p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >
                      <p
                        className=" text-sm"
                        onClick={() => setIsSelected((prev) => !prev)}
                      >
                        {item.servico}
                      </p>
                      <div className="flex flex-row gap-2">
                        <p className="text-sm">{item.preco}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-3 mt-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                ))}
                <div className="flex flex-row justify-between mb-2">
                  <p className="font-bold text-sm">Total</p>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold text-sm">0.00</p>
                  </div>
                </div>
              </>
            ) : (
              <p className="font-bold text-center mb-4">Planificação</p>
            )}
          </div>
        </div>
        <div className="block col-span-5 w-full">
          {isClicked ? (
            <>
              <button
                type="button"
                onClick={() => setIsClicked((prev) => !prev)}
                className="m-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Voltar
              </button>
              {isSelected ? (
                <>
                  <div className="text-center mt-4 underline mb-4">
                    SERVIÇO SELECCIONADO
                  </div>
                  <div className="flex flex-row justify-between mx-8">
                    <div className="flex flex-col text-center">
                      <small>Preço Minimo</small>
                      <small>0.00</small>
                    </div>
                    <div className="flex flex-col text-center">
                      <small>Preço Final</small>
                      <small>0.00</small>
                    </div>
                    <div className="flex flex-col text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </div>
                  </div>
                  <hr className="mx-4" />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="m-4 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Imprimir
                    </button>
                    <button
                      type="button"
                      className="m-4 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Download
                    </button>
                  </div>
                  <div className="m-4">
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
                      <div className="flex flex-row justify-between mx-8">
                        <div className="flex flex-col text-center">
                          <small className="font-bold">Serviço</small>
                          <small>Nome do Serviço</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">Custo Estimado</small>
                          <small>0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">Custo Final</small>
                          <small>0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">Pago</small>
                          <small>0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">Acção</small>
                          <small>0.00</small>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between mx-8 mt-24">
                        <div className="flex flex-col text-center ml-8">
                          <small className="font-bold">Total</small>
                        </div>
                        <div className="flex flex-col text-center ml-10">
                          <small className="font-bold">0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold">0.00</small>
                        </div>
                        <div className="flex flex-col text-center">
                          <small className="font-bold"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mt-4 underline mb-4">
                    ORÇAMENTO
                  </div>
                  <div className="flex flex-row justify-between mx-8">
                    <div className="flex flex-col text-center">
                      <small>Disponivel</small>
                      <small>0.00</small>
                    </div>
                    <div className="flex flex-col text-center">
                      <small>Minimo</small>
                      <small>0.00</small>
                    </div>
                    <div className="flex flex-col text-center">
                      <small>Final</small>
                      <small>0.00</small>
                    </div>
                    <div className="flex flex-col text-center">
                      <small>Excedente</small>
                      <small>0.00</small>
                    </div>
                  </div>
                  <hr className="mx-4" />
                  <div className="text-center mt-4 underline mb-4">
                    Destribuição de Custos
                  </div>
                  <div className="flex justify-center">
                    <div className="w-1/2 h-1/2">
                      <Doughnut data={data2} />
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="text-center mt-4 underline mb-4">
                ORÇAMENTAÇÃO
              </div>
              <div className="flex flex-row justify-center gap-12">
                <div className="text-center">
                  <div>Orçamento Dispinivel</div>
                  <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-60"></div>
                </div>
                <div className="text-center">
                  <div>Orçamento Real</div>
                  <div
                    className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-60"
                    onClick={() => setIsClicked((prev) => !prev)}
                  ></div>
                </div>
                <div>
                  <div className="text-center">Momentos do Evento</div>
                  <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-60"></div>
                </div>
              </div>
              <div className="text-center mt-4 underline mb-4">
                SELECÇÃO DE SERVIÇOS
              </div>
              <button
                type="button"
                className="ml-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Seleccionar Tudo
              </button>
              <div className="flex flex-row gap-4 ml-4 mt-8 justify-center">
                <div className="mt-4">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    {listServicos.map((item) => (
                      <div key={item.servico}>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="checkboxChecked"
                          defaultChecked
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="checkboxChecked"
                        >
                          {item.servico}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    {listServicos2.map((item) => (
                      <div key={item.servico}>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="checkboxChecked"
                          defaultChecked
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="checkboxChecked"
                        >
                          {item.servico}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    {listServicos3.map((item) => (
                      <div key={item.servico}>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="checkboxChecked"
                          defaultChecked
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="checkboxChecked"
                        >
                          {item.servico}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    {listServicos4.map((item) => (
                      <div key={item.servico}>
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="checkboxChecked"
                          defaultChecked
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="checkboxChecked"
                        >
                          {item.servico}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="m-4">
                <div>Por ver</div>
                <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
