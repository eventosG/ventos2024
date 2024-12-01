import { cn } from "../../../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const VideosService = () => {
  return (
    <div className=" bg-gray-50">
      <div className="container mx-auto">
        {/* <div className="text-center text-blue-500 text-2xl font-serif font-bold mt-4">
        <p>Videos</p>
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center py-16 px-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
              Guarde Cada Momento: Criação de Vídeos Memoriais Personalizados
            </h1>
            <h2 className="text-xl text-gray-600 text-center mb-4">
              Celebre as memórias mais preciosas do seu evento com vídeos
              exclusivos e emocionantes.
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mb-8">
              Transforme os momentos inesquecíveis do seu evento em vídeos
              memoriais criados sob medida. Com nossa solução de gestão de
              eventos, capturamos os destaques mais especiais e os editamos em
              uma narrativa visual única, perfeita para compartilhar e reviver
              sempre que quiser. Desde casamentos emocionantes até celebrações
              corporativas e aniversários, ajudamos você a manter suas memórias
              vivas para sempre.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Solicite um Orçamento Agora
              </a>
              <a
                href="#"
                className="text-blue-600 font-semibold py-3 px-6 border border-blue-600 rounded-lg hover:bg-blue-100"
              >
                Veja Exemplos de Vídeos Criados
              </a>
            </div>

            {/* <div className="w-full max-w-4xl mt-12">
            <video className="w-full rounded-lg shadow-lg" controls>
              <source
                src="/videos/exemplo-video-memorial.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div> */}
          </div>
          <div>
            <BentoGrid className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 4 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </div>
    </div>
  );
};
const Skeleton = () => (
  <video className="w-full max-w-4xl rounded-lg shadow-lg" controls>
    <source src="/videos/video1.mp4" type="video/mp4" />
  </video>
);
const Skeleton2 = () => (
  <video className="w-full max-w-4xl rounded-lg shadow-lg" controls>
    <source src="/videos/video2.mp4" type="video/mp4" />
  </video>
);
const Skeleton3 = () => (
  <video className="w-full max-w-4xl rounded-lg shadow-lg" controls>
    <source src="/videos/video3.mp4" type="video/mp4" />
  </video>
);
const Skeleton4 = () => (
  <video className="w-full max-w-4xl rounded-lg shadow-lg" controls>
    <source src="/videos/video4.mp4" type="video/mp4" />
  </video>
);
const items = [
  {
    title: "Preparativos",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Celebração",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Casamento",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Decoração",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton4 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
