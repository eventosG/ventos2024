import { useState, useEffect } from "react";

export default function ModalConvidado({
  isOpen,
  onClose,
  nomeConvidado,
  setNomeConvidado,
  createServicoSelecionado,
  listaGruposF,
  listaMesasF,
  closeModal,
  setGrupos,
  setMesas,
  setParticipacao,
  setMomento,
}) {
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
        <h2 className="text-xl font-semibold mb-4">Novo Convidado</h2>
        <input
          value={nomeConvidado}
          onChange={(e) => setNomeConvidado(e.target.value)}
          className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Digite o nome do convidado"
        />
        <span className="font-normal">Grupo</span>
        <select
          name="cars2"
          id="cars2"
           className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setGrupos(e.target.value)}
        >
          <option value="Convidados Especiais">Convidados Especiais</option>
          <option value="Familiares da Noiva">Familiares da Noiva</option>
          <option value="Familiares do Noivo">Familiares do Noivo</option>
          {listaGruposF.length > 0 &&
            listaGruposF.map((grupo, index) => (
              <option key={index} value={grupo.nomeGrupo}>
                {grupo.nomeGrupo}
              </option>
            ))}
        </select>
        <span className="font-normal">Mesa</span>
        <select
          name="cars2"
          id="cars2"
           className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMesas(e.target.value)}
        >
          <option value="Mesas">Mesas</option>
          {listaMesasF.length > 0 &&
            listaMesasF.map((mesa, index) => (
              <option key={index} value={mesa.nomeMesa}>
                {mesa.nomeMesa}
              </option>
            ))}
        </select>
        <span className="font-normal">Participação</span>
        <select
          name="cars2"
          id="cars2"
           className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setParticipacao(e.target.value)}
        >
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
        </select>
        <span className="font-normal">Momento</span>
        <select
          name="cars2"
          id="cars2"
           className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMomento(e.target.value)}
        >
          <option value="Compo de Água">Compo de Água</option>
          <option value="After Party">After Party</option>
          <option value="Cerimônia Religiosa">Cerimônia Religiosa</option>
          <option value="Todos Momentos">Todos Momentos</option>
          <option value="Não Aplicável">Não Aplicável</option>
        </select>
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
