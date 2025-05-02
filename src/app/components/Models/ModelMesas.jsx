import { useState, useEffect } from "react";

export default function ModalMesa({ isOpen, onClose, nomeGrupo, setNomeGrupo, createServicoSelecionado, closeModal }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Nova Mesa</h2>
        <input
          value={nomeGrupo}
          onChange={(e) => setNomeGrupo(e.target.value)}
          className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Digite o nome da mesa"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={createServicoSelecionado}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
