import React from "react";

export const VideosService = () => {
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
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 1
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 1.</p>
            </div>
          </div>

          {/* Vídeo 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 2
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 2.</p>
            </div>
          </div>

          {/* Vídeo 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 3
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 3.</p>
            </div>
          </div>

          {/* Vídeo 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 4
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 4.</p>
            </div>
          </div>

          {/* Vídeo 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Título do Vídeo 5
              </h3>
              <p className="text-gray-600">Descrição breve sobre o vídeo 5.</p>
            </div>
          </div>

          {/* Vídeo 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src="https://drive.google.com/file/d/1cUmsijXeEusEjTZH-d2DXouQhuATauAw/view?usp=sharing?key=AIzaSyAODkLqSFnOAE-cSRvEF2f5-ugsYB6ReAA"
              title="Vídeo 6"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
