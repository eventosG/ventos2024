import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria e João",
      date: "Casamento - Abril de 2024",
      text: "O salão era perfeito, a decoração estava impecável, e o suporte foi excepcional! Obrigado por tornar nosso dia tão especial.",
      image: "/images/Avatar22.png",
    },
    {
      name: "Lucas Almeida",
      date: "Evento Corporativo - Junho de 2024",
      text: "A equipe foi muito profissional e cuidou de cada detalhe. O evento foi um sucesso absoluto. Recomendo!",
      image: "/images/Avatar22.png",
    },
    {
      name: "Carla Mendes",
      date: "Aniversário - Março de 2024",
      text: "A festa foi inesquecível! Tudo estava organizado e a decoração era incrível. Gratidão pela dedicação!",
      image: "/images/Avatar22.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        O que nossos clientes dizem
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.date}</p>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
