"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const DropDown = dynamic(() => import("./dropdown"), { ssr: false });
const Input = dynamic(() => import("./input"), { ssr: false });
const ModelPP = dynamic(() => import("./model"), { ssr: false });
export default function Servicos() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isCrtoesInstrucoes, setIsCrtoesInstrucoes] = useState(false);
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
                  <DropDown />
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
                  <Input />
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
      <ModelPP
        showModal={showModal}
        setShowModal={setShowModal}
        setIsCrtoesInstrucoes={setIsCrtoesInstrucoes}
      />
    </div>
  );
}
