import React from "react";

const PartnershipsAndSuppliers = () => {
  const partners = [
    {
      name: "Catering Delícias",
      description:
        "Especializados em buffets personalizados, oferecem uma vasta gama de opções gastronômicas para tornar qualquer evento inesquecível.",
      logo: "/images/Avatar22.png",
    },
    {
      name: "Floral Art",
      description:
        "Floral Art é uma floricultura renomada que cria arranjos florais incríveis para qualquer tipo de evento, desde casamentos até eventos corporativos.",
      logo: "/images/Avatar22.png",
    },
    {
      name: "Sonhos Luminosos",
      description:
        "Fornecedor de iluminação e decoração de alta qualidade, transformando qualquer ambiente com suas soluções criativas de luzes e cores.",
      logo: "/images/Avatar22.png",
    },
    {
      name: "Música ao Vivo",
      description:
        "Oferecem bandas e músicos talentosos para diversos tipos de eventos, proporcionando entretenimento de qualidade e energia positiva.",
      logo: "/images/Avatar22.png",
    },
    {
      name: "Tech Pro",
      description:
        "Fornecedores de equipamentos de áudio, vídeo e tecnologia de ponta, garantindo que seu evento tenha som e imagem impecáveis.",
      logo: "/images/Avatar22.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Nossas Parcerias e Fornecedores
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Trabalhamos com os melhores fornecedores e parceiros do mercado para
        garantir a qualidade e o sucesso de cada evento. Conheça alguns dos
        nossos colaboradores de confiança.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {partner.name}
            </h3>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipsAndSuppliers;
