"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    img: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    title: "Casamento",
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    title: "Aniversário",
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    title: "Lobolo",
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    title: "Sociais",
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    title: "Graduação",
  },
];

export const EventosRealizados = () => {
  return (
    <div>
      {/* <div className="text-center text-blue-500 text-2xl font-serif font-bold mt-4">
        <p>Eventos Realizados</p>
      </div> */}
      <section className="flex flex-col items-center bg-gray-50 py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Eventos Realizados
        </h1>
        <h2 className="text-xl text-gray-600 text-center mb-4">
          Momentos que marcaram e celebraram histórias inesquecíveis.
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          Confira alguns dos eventos realizados por nossa equipe. Desde festas
          corporativas e casamentos elegantes até aniversários e celebrações
          memoráveis, cada evento foi planejado com dedicação e excelência para
          criar experiências únicas.
        </p>

        <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
    </div>
  );
};
