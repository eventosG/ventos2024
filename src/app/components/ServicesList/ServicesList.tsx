import React from "react";

const ServicesList = () => {
  const services = [
    {
      title: "Planejamento Completo de Eventos",
      description:
        "Nossa equipe cuida de cada detalhe para garantir que seu evento seja um sucesso do início ao fim.",
      icon: "🎯",
    },
    {
      title: "Decoração Personalizada",
      description:
        "Transformamos o ambiente para refletir sua visão com decorações únicas e criativas.",
      icon: "🎨",
    },
    {
      title: "Buffet e Catering",
      description:
        "Oferecemos um menu variado e delicioso, adaptado ao seu gosto e às necessidades dos seus convidados.",
      icon: "🍴",
    },
    {
      title: "Entretenimento",
      description:
        "De DJs a bandas ao vivo, garantimos a trilha sonora perfeita para sua celebração.",
      icon: "🎶",
    },
    {
      title: "Fotografia e Filmagem",
      description:
        "Capturamos os momentos mais especiais com profissionais experientes e equipamentos de alta qualidade.",
      icon: "📸",
    },
    {
      title: "Suporte Técnico",
      description:
        "Cuidamos de som, iluminação e tudo o que você precisa para um evento impecável.",
      icon: "🔌",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Serviços Oferecidos
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Nossos serviços são projetados para tornar seu evento único e memorável.
        Descubra tudo o que podemos oferecer para criar uma experiência
        inesquecível.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
