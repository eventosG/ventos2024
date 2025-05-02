"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export const Hero = () => {
  const images = ["/hero/hero1.jpg", "/hero/hero2.jpg", "/hero/hero3.jpg"];
  const { user } = useUser();
  const [listaEvento, setListaEvento] = useState([]);
  let listaEventosVolatel = [];
  useEffect(() => {
    listaEventosVolatel = [];
    fetch("api/eventos/get") // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaEventosVolatel.push(evento);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaEvento(listaEventosVolatel);
      });
  }, [user?.fullName, user?.primaryEmailAddress?.emailAddress]);
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100 py-16 px-6 lg:px-20">
      {/* Textos - Lado Direito */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Organiza o teu evento a qualquer momento e onde estiver.
        </h1>
        <p className="text-gray-600 mb-6">
          Colocamos à sua disposição todas as ferramentas e serviços para que a
          organização do teu evento seja uma jornada discontraida e cheia de
          emoção. O propósito da nossa equipa é claro, dar vida as tuas ideias e
          satisfazer as tuas expectativas.
        </p>
        <div className="m-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            {/* <AceternityLogo /> */}
            {listaEvento.length > 0 ? (
              <>
                <a href="/meusEventosLista">
                  <span> Planificar Evento</span>
                </a>
              </>
            ) : (
              <>
                <a href="/novoEvento">
                  <span> Planificar Evento</span>
                </a>
              </>
            )}
          </HoverBorderGradient>
        </div>
      </div>
      {/* Carrossel - Lado Esquerdo */}
      <div className="col-span-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg shadow-lg w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-64 lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
