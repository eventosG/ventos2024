import React from "react";

const EventPlanningTips = () => {
  const tips = [
    {
      title: "Defina um Orçamento Claro",
      description:
        "Antes de iniciar o planejamento, estabeleça um orçamento realista. Isso ajudará a definir limites para as escolhas de locais, fornecedores e decoração.",
      icon: "💰",
    },
    {
      title: "Escolha o Local Ideal",
      description:
        "O local do evento é essencial para criar a atmosfera desejada. Considere a capacidade, localização e infraestrutura do espaço para garantir que atenda às suas necessidades.",
      icon: "📍",
    },
    {
      title: "Contrate Fornecedores Confiáveis",
      description:
        "Desde catering até fotografia, escolha fornecedores com boa reputação e experiência. As referências e avaliações podem ajudar na decisão.",
      icon: "🍽️",
    },
    {
      title: "Crie um Cronograma Detalhado",
      description:
        "Planeje cada etapa do evento, desde a chegada dos fornecedores até o encerramento. Ter um cronograma ajudará a garantir que tudo aconteça sem problemas.",
      icon: "📅",
    },
    {
      title: "Considere a Experiência dos Convidados",
      description:
        "Garanta que a experiência do convidado seja positiva. Pense em detalhes como acomodações, alimentação e entretenimento para criar uma experiência memorável.",
      icon: "🎉",
    },
    {
      title: "Prepare-se para o Inesperado",
      description:
        "Imprevistos podem acontecer. Tenha planos de contingência prontos para situações inesperadas, como mudanças climáticas ou problemas de última hora com fornecedores.",
      icon: "⚠️",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Dicas para Planejar Eventos
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Planejar um evento de sucesso envolve muitos detalhes. Aqui estão
        algumas dicas úteis para ajudá-lo a organizar eventos incríveis e sem
        estresse.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-6xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPlanningTips;
