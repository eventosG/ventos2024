import React from "react";

export const VideosService = () => {
  const videoUrl =
    "https://drive.google.com/uc?export=view&id=1cUmsijXeEusEjTZH-d2DXouQhuATauAw";
  return (
    <section id="videos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Lista de Vídeos
        </h2>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vídeo 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 1
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 1.</p>
            </div>
          </div>

          {/* Vídeo 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 2
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 2.</p>
            </div>
          </div>

          {/* Vídeo 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 3
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 3.</p>
            </div>
          </div>

          {/* Vídeo 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 4
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 4.</p>
            </div>
          </div>

          {/* Vídeo 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 5
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 5.</p>
            </div>
          </div>

          {/* Vídeo 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="w-full max-w-3xl">
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 6
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 6.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
