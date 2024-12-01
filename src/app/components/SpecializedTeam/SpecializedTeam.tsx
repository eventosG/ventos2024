import React from "react";

const SpecializedTeam = () => {
  const teamMembers = [
    {
      name: "Joana Silva",
      role: "Coordenadora de Eventos",
      description:
        "Joana possui mais de 10 anos de experiência em organização de eventos, garantindo o sucesso de cada projeto com um olhar atento aos detalhes.",
      image: "/images/Avatar22.png",
    },
    {
      name: "Carlos Oliveira",
      role: "Designer de Decoração",
      description:
        "Carlos é responsável por criar ambientes exclusivos e personalizados, transformando espaços e surpreendendo os convidados.",
      image: "/images/Avatar22.png",
    },
    {
      name: "Fernanda Costa",
      role: "Gestora de Catering",
      description:
        "Com vasta experiência na área de gastronomia, Fernanda oferece soluções de buffet que encantam todos os sentidos.",
      image: "/images/Avatar22.png",
    },
    {
      name: "Luís Almeida",
      role: "Especialista em Entretenimento",
      description:
        "Luís traz alegria e energia aos eventos com opções de entretenimento que atendem a todos os tipos de públicos.",
      image: "/images/Avatar22.png",
    },
    {
      name: "Amanda Santos",
      role: "Fotógrafa e Videomaker",
      description:
        "Amanda é uma profissional criativa que captura momentos inesquecíveis, criando memórias que serão lembradas para sempre.",
      image: "/images/Avatar22.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Nossa Equipe Especializada
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Conheça os profissionais que tornam cada evento único e memorável. Com
        experiência e dedicação, nossa equipe está pronta para criar
        experiências inesquecíveis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm italic mb-4">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedTeam;
