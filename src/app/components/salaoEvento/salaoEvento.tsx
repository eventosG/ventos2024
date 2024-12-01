"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export const SalaoEvento = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        {/* <div>Salao Evento</div> */}
        <section className="flex flex-col items-center  py-16 px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Locais para Eventos
          </h1>
          <h2 className="text-xl text-gray-600 text-center mb-4">
            Descubra os melhores espaços para tornar seu evento inesquecível.
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mb-8">
            Oferecemos uma seleção de locais exclusivos, desde salões
            sofisticados e espaços ao ar livre até locais personalizados para
            atender suas necessidades. Encontre o espaço perfeito para
            casamentos, aniversários, festas corporativas e muito mais.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Local 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Salão Elegante"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Salão Elegante
                </h3>
                <p className="text-gray-600 mt-2">
                  Um salão sofisticado, perfeito para casamentos e eventos
                  corporativos, com capacidade para até 300 pessoas.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            {/* Local 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Espaço ao Ar Livre"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Espaço ao Ar Livre
                </h3>
                <p className="text-gray-600 mt-2">
                  Um espaço rodeado pela natureza, ideal para eventos ao ar
                  livre e celebrações descontraídas.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            {/* Local 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Espaço Personalizado"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Espaço Personalizado
                </h3>
                <p className="text-gray-600 mt-2">
                  Customize o local dos seus sonhos para criar um evento único e
                  inesquecível.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="grid md:grid-cols-4 gap-4">
      <div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Nome do Hotel</p>
            <p className="font-normal text-sm">1,299.00 MZN / Noite</p>
          </DirectionAwareHover>
        </div>
      </div>
      <div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Nome do Hotel</p>
            <p className="font-normal text-sm">1,299.00 MZN / Noite</p>
          </DirectionAwareHover>
        </div>
      </div>
      <div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Nome do Hotel</p>
            <p className="font-normal text-sm">1,299.00 MZN / Noite</p>
          </DirectionAwareHover>
        </div>
      </div>
      <div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Nome do Hotel</p>
            <p className="font-normal text-sm">1,299.00 MZN / Noite</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
};
