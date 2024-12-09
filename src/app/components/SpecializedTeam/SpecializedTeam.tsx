"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const SpecializedTeam = () => {
  const content = [
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eos cum dolore architecto quas vitae nobis, itaque odio est, alias modi corrupti dolor voluptatem quidem neque placeat tenetur adipisci voluptas.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/eventos/eventos1.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eos cum dolore architecto quas vitae nobis, itaque odio est, alias modi corrupti dolor voluptatem quidem neque placeat tenetur adipisci voluptas.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/eventos/eventos2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eos cum dolore architecto quas vitae nobis, itaque odio est, alias modi corrupti dolor voluptatem quidem neque placeat tenetur adipisci voluptas.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src="/eventos/eventos3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eos cum dolore architecto quas vitae nobis, itaque odio est, alias modi corrupti dolor voluptatem quidem neque placeat tenetur adipisci voluptas.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/eventos/eventos2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 mt-12">
        Nossa equipa de profissionais
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
        A nossa equipa de profissionais garante que cada detalhe do seu evento
        seja perfeito. Não só cuidamos de todos os pormenores com precisão, como
        transformamos o seu evento num momento único de celebração e memórias
        inesquecíveis.
      </p>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default SpecializedTeam;
