"use client";
import { HoverEffect } from "../ui/card-hover-effect";
export const Escolha = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 mt-12">
          Somos a tua melhor escolha
        </h1>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4">
          Nós lapidamos a sua ideia e mais do que isso, fazemos de tudo para dar
          vida ao seu evento, pensamos em cada pormenor para lhe proporcionar
          momentos ímpares
        </p>
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export const projects = [
  {
    title: "Entrega",
    description:
      "Produzimos eventos de alta qualidade, personalizados para refletir suas preferências e tornar cada detalhe único. Confie em nós para criar momentos inesquecíveis, exactamente do jeito que você imagina.",
    link: "#",
  },
  {
    title: "Inovação",
    description:
      "Criamos eventos inovadores e funcionais, planificamos para surpreender e encantar. Garantimos que cada detalhe ofereça uma experiência única para todos, incluindo seus convidados.",
    link: "#",
  },
  {
    title: "Exclusividade",
    description:
      "Transformamos Sonhos em Eventos ExclusivosCada detalhe é pensado para refletir sua personalidade e superar suas expectativas. Criamos momentos únicos, feitos sob medida, para tornar o seu evento verdadeiramente inesquecível.",
    link: "#",
  },
  {
    title: "Segurança",
    description:
      "Produzimos eventos seguros, com atenção a cada detalhe e a todos os participantes. Além disso, garantimos que todas as operações de pagamento sejam protegidas e realizadas com total segurança.",
    link: "#",
  },
  //   {
  //     title: "Amazon",
  //     description:
  //       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //     link: "#",
  //   },
  //   {
  //     title: "Microsoft",
  //     description:
  //       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //     link: "#",
  //   },
];
