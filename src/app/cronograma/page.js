"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { AiOutlineCheck } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "../components/Models/ModelCronograma";

export default function Cronograma() {
  const [showVisao, setShowVisao] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actualizar, setActualizar] = useState("");
  const [momentoText, setMomentoText] = useState("");
  const [tipoEventoSelected, settipoEventoSelected] = useState("");
  const [nomeNoivo, setNomeNoivo] = useState("");
  const [nomeNoiva, setNomeNoiva] = useState("");
  const [localEvento, setLocalEvento] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [momento, setMomento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [interveniente, setInterveniente] = useState("");
  const [duracao, setDuracao] = useState("");
  const { user } = useUser();
  const [listaMomentos, setListaMomentos] = useState([]);
  let listaMomentosF = [];
  function momentoF(momento) {
    setShowVisao(true);
    setMomentoText(momento);
  }
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    settipoEventoSelected(localStorage.getItem("tipoEvento"));
    const timerInterval = setInterval(() => {
      console.log("Countdown complete!");
    }, 5000);
  }, []);
  useEffect(() => {
    fetch("api/eventos/get", {
      cache: "no-store", // Isso já evita cache no navegador e no Vercel
      headers: {
        // Adicione headers extras para garantir que não haja cache
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    }) // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            if (evento.tipoEvento === tipoEventoSelected) {
              setNomeNoivo(evento.nomeNoivo);
              setNomeNoiva(evento.nomeNoiva);
              setLocalEvento(evento.localEvento);
              setDataEvento(evento.dataEvento);
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {});
    fetch("api/cronograma/get", {
      cache: "no-store", // Isso já evita cache no navegador e no Vercel
      headers: {
        // Adicione headers extras para garantir que não haja cache
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    }
  ) // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        listaMomentosF = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaMomentosF.push(evento);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaMomentos(listaMomentosF);
      });
  }, [
    user?.fullName,
    user?.primaryEmailAddress?.emailAddress,
    tipoEventoSelected,
    actualizar,
  ]);
  const createCronograma = async () => {
    setSubmitting(true);
    setActualizar("asaaf");
    closeModal();
    try {
      toast.info(`🦄 Adicionando Cronograma!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (
        momento === "" ||
        descricao === "" ||
        interveniente === "" ||
        duracao === ""
      ) {
        toast.error(`🦄 Todos os campos devem ser preenchidos!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSubmitting(false);
        return;
      } else {
        const response = await fetch("api/cronograma/new", {
          method: "POST",
          body: JSON.stringify({
            criadoPor: user.fullName,
            criadoPorEmail: user.primaryEmailAddress?.emailAddress,
            momento,
            descricao,
            interveniente,
            duracao,
          }),
        });
        toast.success(`Momento ${momento} Adicionado com Sucesso!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setActualizar("fged");
      toast.error(`🦄 Erro ao adicionar ${error}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSubmitting(false);
    } finally {
      setMomento("");
      setDescricao("");
      setInterveniente("");
      setDuracao("");
      setSubmitting(false);
      setActualizar("dadas");
      // router.push("/planificacao");
    }
  };
  const handleDeleteServico = async (id) => {
    setActualizar("a9");
    if (!confirm(`Tem certeza que deseja remover este Momento?`)) return;

    try {
      const res = await fetch(`/api/cronograma/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setActualizar("a10");
        alert("Momento removido com sucesso!");
        router.refresh(); // Atualiza a página sem recarregar completamente
      } else {
        const data = await res.json();
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao remover evento:", error);
    }
  };
  return (
    <div className="container lg:mx-auto lg:min-h-50vh">
      <div className="mt-4">
        <p className="text-center font-bold text-xl mb-4">Cronograma</p>
        <hr />
        <div className="gap-4 flex justify-center">
          <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  height={900}
                  width={900}
                  src="/assets/images/Noivo.png"
                  className="w-28 rounded-full shadow-lg"
                  alt="Avatar"
                />
                <Image
                  height={900}
                  width={900}
                  src="/assets/images/Noiva.png"
                  className="w-28 rounded-full shadow-lg"
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Casamento de:</p>
                  <p>
                    {nomeNoivo} e {nomeNoiva}
                  </p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Local do Evento:</p>
                  <p>{localEvento}</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Data do Evento:</p>
                  <p>{dataEvento}</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Mestre de Ceremonia:</p>
                  <p>Indisponivel</p>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <p className="font-bold">Duração:</p>
                  <p>Indisponivel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
        >
          + Grupos
        </button>
        <div className="flex flex-col mb-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  momento={momento}
                  setMomento={setMomento}
                  descricao={descricao}
                  setDescricao={setDescricao}
                  interveniente={interveniente}
                  setInterveniente={setInterveniente}
                  duracao={duracao}
                  setDuracao={setDuracao}
                  createCronograma={createCronograma}
                  closeModal={closeModal}
                />
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        #
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Momento
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Descrição
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Interveniente
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Duração
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Acção
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaMomentos.length > 0 &&
                      listaMomentos.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {item.momento}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {item.descricao}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {item.interveniente}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              {item.duracao} min
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">
                              <AiOutlineCheck className="text-blue-600" />
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">
                              <FaRegTrashAlt
                                className="cursor-pointer text-red-600"
                                onClick={() =>
                                  handleDeleteServico(item._id)
                                }
                              />
                            </td>
                          </tr>
                        );
                      })}
                    {/* <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {" "}
                        <div className="flex justify-center">
                          <Countdown date={Date.now() + 5000}>
                            <AiOutlineCheck className="text-blue-600" />
                          </Countdown>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4 cursor-pointer">
                        ...
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            height={400}
            width={900}
            src="/qrCode.png"
            className="w-28"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

// O formulário de registro deverá pedir o numero de convidados expeciais e outros convidados separadamente, estes dados serão usados no RSVP das tabelas dos convidados especiais e outros convidados respectivamente
