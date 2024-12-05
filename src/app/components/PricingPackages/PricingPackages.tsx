"use client";
import React, { useState } from "react";

const PricingPackages = () => {
  const [selected, setSelected] = useState("Casamentos");
  const casamentos = [
    {
      name: "Básico",
      price: "1000 MT",
      categoria: "Casamento",
      features: [
        "Planejamento inicial",
        "Decoração padrão",
        "Suporte no dia do evento",
      ],
      icon: "⭐",
    },
    {
      name: "Premium",
      price: "3000 MT",
      categoria: "Casamento",
      features: [
        "Planejamento completo",
        "Decoração personalizada",
        "Fotografia profissional",
        "Gestão de fornecedores",
      ],
      icon: "🌟",
    },
    {
      name: "Luxo",
      price: "5000 MT",
      categoria: "Casamento",
      features: [
        "Consultoria exclusiva",
        "Decoração temática",
        "Buffet e catering",
        "Filmagem profissional",
        "Entretenimento ao vivo",
      ],
      icon: "💎",
    },
  ];
  const aniversarios = [
    {
      name: "Básico",
      price: "1000 MT",
      categoria: "Aniversário",
      features: [
        "Planejamento inicial",
        "Decoração padrão",
        "Suporte no dia do evento",
      ],
      icon: "⭐",
    },
    {
      name: "Premium",
      price: "3000 MT",
      categoria: "Aniversário",
      features: [
        "Planejamento completo",
        "Decoração personalizada",
        "Fotografia profissional",
        "Gestão de fornecedores",
      ],
      icon: "🌟",
    },
    {
      name: "Luxo",
      price: "5000 MT",
      categoria: "Aniversário",
      features: [
        "Consultoria exclusiva",
        "Decoração temática",
        "Buffet e catering",
        "Filmagem profissional",
        "Entretenimento ao vivo",
      ],
      icon: "💎",
    },
  ];
  const sociais = [
    {
      name: "Básico",
      price: "1000 MT",
      categoria: "Social",
      features: [
        "Planejamento inicial",
        "Decoração padrão",
        "Suporte no dia do evento",
      ],
      icon: "⭐",
    },
    {
      name: "Premium",
      price: "3000 MT",
      categoria: "Social",
      features: [
        "Planejamento completo",
        "Decoração personalizada",
        "Fotografia profissional",
        "Gestão de fornecedores",
      ],
      icon: "🌟",
    },
    {
      name: "Luxo",
      price: "5000 MT",
      categoria: "Social",
      features: [
        "Consultoria exclusiva",
        "Decoração temática",
        "Buffet e catering",
        "Filmagem profissional",
        "Entretenimento ao vivo",
      ],
      icon: "💎",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Pacotes e Preços
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Os nossos pacotes são feitos a pensar em ti, temos orçamentos à medida
        das suas capacidades e o melhor de tudo, que respondem as suas
        expectativas.
      </p>
      <div className="flex flex-row gap-4 justify-center text-center mb-8">
        <small
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setSelected("Casamentos")}
        >
          Casamentos
        </small>
        <small
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setSelected("Aniversários")}
        >
          Aniversários
        </small>
        <small
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setSelected("Sociais")}
        >
          Sociais
        </small>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {selected === "Casamentos" && (
          <>
            {" "}
            {casamentos.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {pkg.categoria}
                </h3>
                <p className="text-4xl font-bold text-blue-500 mb-4">
                  {pkg.price}
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Selecionar Pacote
                </button>
              </div>
            ))}
          </>
        )}
        {selected === "Aniversários" && (
          <>
            {" "}
            {aniversarios.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {pkg.categoria}
                </h3>
                <p className="text-4xl font-bold text-blue-500 mb-4">
                  {pkg.price}
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Selecionar Pacote
                </button>
              </div>
            ))}
          </>
        )}
        {selected === "Sociais" && (
          <>
            {" "}
            {sociais.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {pkg.categoria}
                </h3>
                <p className="text-4xl font-bold text-blue-500 mb-4">
                  {pkg.price}
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Selecionar Pacote
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default PricingPackages;
