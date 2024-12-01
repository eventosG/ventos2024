import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("./carousel"), { ssr: false });

export const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[820px] flex items-center">
          <div>
            <div>
              {" "}
              <p className="text-blue-600 text-4xl font-serif font-bold">
                Transforme Seu Evento
              </p>
              <p className="text-blue-600 text-2xl font-serif">
                Em Uma Experiência Inesquecível
              </p>
            </div>
            <div className="mt-4 text-md font-serif font-bold">
              <p>
                Gestão completa de eventos festivos – simples, eficiente e
                personalizada para você.
              </p>
            </div>
            <div className="mt-4 text-gray-600 text-justify">
              {" "}
              <p>
                Planejar e organizar eventos nunca foi tão fácil! Nosso sistema
                de gestão para eventos festivos ajuda você a criar celebrações
                incríveis, desde casamentos e aniversários até festas
                corporativas. Com funcionalidades que vão do controle de
                convidados à coordenação de fornecedores, você ganha mais tempo
                para curtir o momento.
              </p>
            </div>
            <div className="flex justify-end mt-12">
              <button
                type="button"
                className="ml-4 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-500 text-white hover:bg-blue-200 hover:text-black"
              >
                Planificar Evento
              </button>
            </div>
          </div>
        </div>
        <div className="h-[820px] flex items-center">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
