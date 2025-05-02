"use client";
import { useState } from "react";

export default function FormComponent({
  setRoadMapTitle,
  setRoadMapText,
  roadMapTitle,
  roadMapText,
  setShowForm,
  showForm,
  createRoadMap,
  setIsEdit,
  isEdit,
  editRoadMapDB,
}) {
  const verificar = async () => {
    setShowForm(true);
    setIsEdit(false);
  };
  return (
    <div className="flex flex-col min-h-[12px] p-4">
      {!showForm ? (
        <>
          <div className="flex flex-row justify-between items-center">
            {/* Título alinhado à esquerda */}
            <p className="text-xl font-bold mb-4">Road Map</p>

            {/* Botão alinhado à direita */}
            <button
              onClick={() => verificar()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Criar Road Map
            </button>
          </div>
        </>
      ) : (
        <div className="items-center justify-center bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold mb-4">Preencha os campos</h2>
          <input
            value={roadMapTitle}
            onChange={(e) => setRoadMapTitle(e.target.value)}
            type="text"
            placeholder="Título"
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
          />
          <textarea
            value={roadMapText}
            onChange={(e) => setRoadMapText(e.target.value)}
            placeholder="Digite o texto..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-3 h-24"
          />
          <div className="flex justify-between">
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Cancelar
            </button>
            {isEdit ? (
              <>
                {" "}
                <button
                  onClick={() => editRoadMapDB()}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Editar
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => createRoadMap()}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Enviar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
