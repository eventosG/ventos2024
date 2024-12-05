import React from "react";

const EventCategories = () => {
  const categories = [
    {
      name: "Casamentos",
      description:
        "Celebrações de amor com planejamento e decoração personalizada para momentos inesquecíveis.",
      icon: "💍",
    },
    {
      name: "Aniversários",
      description:
        "Festividades cheias de alegria, com temas personalizados e experiências únicas.",
      icon: "🎂",
    },
    {
      name: "Corporativos",
      description:
        "Eventos empresariais, conferências e encontros profissionais com organização impecável.",
      icon: "🏢",
    },
    {
      name: "Formaturas",
      description:
        "Comemore suas conquistas em grande estilo com nossos serviços especializados.",
      icon: "🎓",
    },
    {
      name: "Shows e Concertos",
      description:
        "Produção de eventos musicais com som, luzes e experiências memoráveis.",
      icon: "🎤",
    },
    {
      name: "Infantis",
      description:
        "Festas para crianças com temas divertidos, brincadeiras e animações.",
      icon: "🧸",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Eventos por Categoria
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Encontre a categoria de evento perfeita para atender às suas
        expectativas. Planejamos e executamos cada detalhe com excelência.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
