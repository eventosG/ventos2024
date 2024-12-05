"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    img: "/eventos/eventos1.jpg",
    title: "Sociais",
  },
  {
    img: "/eventos/eventos2.jpg",
    title: "Sociais",
  },
  {
    img: "/eventos/eventos3.jpg",
    title: "Sociais",
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
          Imagens valem mais que palavras! Cada evento que realizamos conta uma
          história de quem acreditou em nós e desfrutou de momentos acima das
          suas expectativas.
        </p>

        <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
