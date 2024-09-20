"use client";
import Image from "next/image";
import React from "react";
export default function InspiracaoSelected() {
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="flex flex-col">
        <div className="my-12 flex justify-center">
          <Image
            height={400}
            width={900}
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
          <div>
            <p className="font-bold text-xl text-center">Descrição</p>
            <p className="text-justify px-4 ml-6 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget magna efficitur, fermentum diam ac, sollicitudin neque. Duis
              et magna posuere, convallis ipsum id, interdum metus. Morbi ut
              urna vel nunc euismod blandit. Aenean mollis iaculis elit. Sed
              sapien tellus, consectetur sit amet fringilla nec, vehicula nec
              sapien. Donec dignissim elit lectus, ac tempor arcu pretium sit
              amet. Sed cursus ac purus et lacinia. Maecenas vel aliquet neque.
              Phasellus ut rhoncus erat, vitae porta massa.
            </p>
            <div className="flex justify-center font-bold text-2xl mt-8">
              <button
                type="button"
                className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Utilizar
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <div className="grid grid-cols-12 gap-4 mb-4">
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
      </div>
    </div>
  );
}
