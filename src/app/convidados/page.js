"use client";
import dynamic from "next/dynamic";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/Models/Modal";
import ModalMesa from "../components/Models/ModelMesas";
import ModalConvidado from "../components/Models/ModelConvidado";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

const Graficos = dynamic(() => import("./graficos"), { ssr: false });
const GraficosParticipacao = dynamic(() => import("./graficosParticipacao"), {
  ssr: false,
});
const TextArea = dynamic(() => import("./textArea"), { ssr: false });
const DropDown = dynamic(() => import("./dropdown"), { ssr: false });
var convidados = [
  "convidado 1",
  "convidado 2",
  "convidado 3",
  "convidado 4",
  "convidado 5",
  "convidado 6",
  "convidado 7",
  "convidado 8",
  "convidado 9",
  "convidado 10",
  "convidado 11",
  "convidado 12",
];
function Convidados() {
  const [showVisao, setShowVisao] = useState(false);
  const [showResumo, setShowResumo] = useState(false);
  const [IsRSVP, setIsRSVP] = useState(false);
  const [tipoEventoSelected, settipoEventoSelected] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenMesa, setIsModalOpenMesa] = useState(false);
  const [isModalOpenConvidado, setIsModalOpenConvidado] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [momentoText, setMomentoText] = useState("");
  const [actualizar, setActualizar] = useState("");
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [nomeMesa, setNomeMesa] = useState("");
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [grupos, setGrupos] = useState("Convidados Especiais");
  const [mesas, setMesas] = useState("");
  const [participacao, setParticipacao] = useState("Presencial");
  const [momento2, setMomento] = useState("Compo de Água");
  const [convidadosPredefinidos, setConvidadosPredefinidos] = useState("");
  const [convidadosConfirmados, setConvidadosConfirmados] = useState("");
  const [convidadosPendentes, setConvidadosPendentes] = useState("");
  const [convidadosCancelados, setConvidadosCancelados] = useState("0");
  const [convidadosCRecusado, setConvidadosCRecusado] = useState("0");
  const [participacaoVirtual, setParticipacaoVirtual] = useState("0");
  const [participacaoPresencial, setParticipacaoPresencial] = useState("0");
  const [listaGruposF, setListaGruposF] = useState([]);
  const [listaMesasF, setListaMesasF] = useState([]);
  const [listaConvidados, setListaConvidados] = useState([]);
  const { user } = useUser();
  let listaGrupos = [];
  let listaMesas = [];
  let listaConvidadosF = [];
  let convidadosConfirmadosV = 0;
  let convidadosPendentesV = 0;
  let participacaoVirtualV = 0;
  let participacaoPresencialV = 0;
  function momento(momento) {
    setShowVisao(true);
    setMomentoText(momento);
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalMesa = () => setIsModalOpenMesa(true);
  const closeModalMesa = () => setIsModalOpenMesa(false);
  const openModalConvidado = () => setIsModalOpenConvidado(true);
  const closeModalConvidado = () => setIsModalOpenConvidado(false);
  useEffect(() => {
    settipoEventoSelected(localStorage.getItem("tipoEvento"));
  }, []);
  useEffect(() => {
    fetch("api/grupos/get", {
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
        listaGrupos = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaGrupos.push(evento);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaGruposF(listaGrupos);
      });
    fetch("api/mesa/get", {
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
        listaMesas = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaMesas.push(evento);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaMesasF(listaMesas);
      });
    fetch("api/convidados/get", {
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
        listaConvidadosF = [];
        convidadosConfirmadosV = 0;
        convidadosPendentesV = 0;
        participacaoVirtualV = 0;
        participacaoPresencialV = 0;
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaConvidadosF.push(evento);
            if (evento.status === "Confirmado") {
              convidadosConfirmadosV += 1;
            }
            if (evento.status === "Pendente") {
              convidadosPendentesV += 1;
            }
            if (evento.participacao === "Presencial") {
              participacaoPresencialV += 1;
            } else {
              participacaoVirtualV += 1;
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaConvidados(listaConvidadosF);
        setConvidadosConfirmados(convidadosConfirmadosV);
        setConvidadosPendentes(convidadosPendentesV);
        setParticipacaoVirtual(participacaoVirtualV);
        setParticipacaoPresencial(participacaoPresencialV);
      });

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
              setConvidadosPredefinidos(evento.convidadosPrevistos);
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {});
  }, [user?.fullName, user?.primaryEmailAddress?.emailAddress, actualizar]);

  const createGroup = async () => {
    setSubmitting(true);
    setActualizar("asaaf");
    closeModal();
    try {
      toast.info(`🦄 Adicionando Grupo!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (nomeGrupo === "") {
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
        const response = await fetch("api/grupos/new", {
          method: "POST",
          body: JSON.stringify({
            criadoPor: user.fullName,
            criadoPorEmail: user.primaryEmailAddress?.emailAddress,
            nomeGrupo,
          }),
        });
        toast.success(`Grupo ${nomeGrupo} Adicionado com Sucesso!`, {
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
      setNomeGrupo("");
      setSubmitting(false);
      setActualizar("dadas");
      // router.push("/planificacao");
    }
  };
  const createMesa = async () => {
    setSubmitting(true);
    setActualizar("asaaf");
    setIsModalOpenMesa(false);
    try {
      toast.info(`🦄 Adicionando Mesa!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (nomeMesa === "") {
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
        const response = await fetch("api/mesa/new", {
          method: "POST",
          body: JSON.stringify({
            criadoPor: user.fullName,
            criadoPorEmail: user.primaryEmailAddress?.emailAddress,
            nomeMesa,
          }),
        });
        toast.success(`Mesa ${nomeMesa} Adicionado com Sucesso!`, {
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
      setNomeMesa("");
      setSubmitting(false);
      setActualizar("dadas");
      // router.push("/planificacao");
    }
  };
  const createConvidado = async () => {
    setSubmitting(true);
    setActualizar("asaaf");
    setIsModalOpenConvidado(false);
    try {
      toast.info(`🦄 Adicionando Convidado!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (nomeConvidado === "") {
        toast.error(`🦄 Necessário Nome do Convidado!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (mesas === "Mesas") {
          toast.error(`🦄 Seleccione a mesa do convidado ${nomeConvidado}!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          const response = await fetch("api/convidados/new", {
            method: "POST",
            body: JSON.stringify({
              criadoPor: user.fullName,
              criadoPorEmail: user.primaryEmailAddress?.emailAddress,
              nomeConvidado,
              grupos,
              mesas,
              participacao,
              momento2,
              status: "Pendente",
            }),
          });
          toast.success(`Convidado ${nomeConvidado} Adicionado com Sucesso!`, {
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
      setNomeConvidado("");
      setSubmitting(false);
      setActualizar("dadas");
      setGrupos("Convidados Especiais");
      // router.push("/planificacao");
    }
  };
  const handleDeleteServico = async (id) => {
    setActualizar("a9");
    if (!confirm(`Tem certeza que deseja remover este convidado?`)) return;

    try {
      const res = await fetch(`/api/convidados/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setActualizar("a10");
        alert("Convidado removido com sucesso!");
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
      {IsRSVP ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <p className="font-bold">Nome do Noivos</p>
              <p className="font-bold">Data do Evento</p>
              <p className="font-bold">Local do Evento</p>
              <p className="font-bold">Local do Evento</p>
              <hr className="my-4" />
              <p className="mb-2">Escreva uma mensagem para o seu convidado</p>
              <div className="flex justify-center">
                <div className="relative mb-3 w-full">
                  <TextArea />
                </div>
              </div>
            </div>

            <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />

                    {/* <!--Search icon--> */}
                    <span
                      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                      id="basic-addon2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-4">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="checkboxDefault"
                  >
                    Todos
                  </label>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  {convidados.map((item) => (
                    <>
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value={item}
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="checkboxDefault"
                        >
                          {item}
                        </label>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="text-center font-bold">Participação</p>
            <div className="flex flex-row gap-4 justify-center my-4">
              <button
                type="button"
                className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              >
                Presencial
              </button>
              {/* Streaming está condicionado a seleccao do mesmo pelo convidado para a visualização na planificação|facturação */}
              <button
                type="button"
                className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              >
                Streaming
              </button>
              <button
                type="button"
                className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              >
                Indisponivel
              </button>
              {/* <button
                                type="button"
                                className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                                Cancelar
                            </button> */}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setIsRSVP((prev) => !prev)}
              type="button"
              className="my-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Enviar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4">
            <p className="text-center font-bold text-xl">Momentos do Evento</p>
            <div className="gap-4 flex justify-center">
              <div
                onClick={() => setShowVisao(false)}
                className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <p>Visão Geral</p>
              </div>
              <div
                onClick={() => momento("Almoço")}
                className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <p>Almoço</p>
              </div>
              <div
                onClick={() => momento("Enlace Matrimonial")}
                className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <p>Enlace Matrimonial</p>
              </div>
              <div
                onClick={() => momento("After Party")}
                className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <p>After Party</p>
              </div>
            </div>
            <hr />
            {showResumo ? (
              <></>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="text-center block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <p className="font-bold">Total de Convidados</p>
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="">
                          Pré-definidos: {convidadosPredefinidos}
                        </p>
                      </div>
                      <div>
                        <p className="">Inseridos: {listaConvidados.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <p className="font-bold">Confirmados</p>
                    <p>{convidadosConfirmados}</p>
                  </div>
                  <div className="text-center block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <p className="font-bold">Pendentes</p>
                    <p>{convidadosPendentes}</p>
                  </div>
                  <div className="text-center block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <p className="font-bold">Alocados</p>
                    <p>0</p>
                  </div>
                </div>
              </>
            )}
            <hr />
            <div className="flex justify-end mt-2">
              {showResumo ? (
                <>
                  {" "}
                  <button
                    onClick={() => setShowResumo((prev) => !prev)}
                    type="button"
                    className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out text-blue-500 hover:text-red-500"
                  >
                    <AiFillCloseCircle className="text-xl" />
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={() => setShowResumo((prev) => !prev)}
                    type="button"
                    className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out"
                  >
                    Resumo Gráfico
                  </button>
                </>
              )}
            </div>
            {showResumo ? (
              <>
                <div className="flex justify-center">
                  <div className="text-center w-1/3">
                    <p className="font-bold">Presenças</p>
                    <Graficos
                      convidadosConfirmados={convidadosConfirmados}
                      convidadosPendentes={convidadosPendentes}
                      convidadosCancelados={convidadosCancelados}
                      convidadosCRecusado={convidadosCRecusado}
                    />
                  </div>
                </div>
                <hr className="my-8" />
                <div className="flex justify-center">
                  <div className="text-center w-1/3">
                    <p className="font-bold">Participação</p>
                    <GraficosParticipacao
                      participacaoPresencial={participacaoPresencial}
                      participacaoVirtual={participacaoVirtual}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {showVisao ? (
                  <></>
                ) : (
                  <>
                    <div className="mt-12">
                      <div className="flex justify-between">
                        <p className="font-bold">Meus Convidados</p>
                        <p className="text-sm">
                          RSVP: {listaConvidados.length}/
                          {convidadosPredefinidos}
                        </p>
                      </div>
                      <hr />
                      <div className="block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row gap-4">
                            <Modal
                              isOpen={isModalOpen}
                              onClose={closeModal}
                              nomeGrupo={nomeGrupo}
                              setNomeGrupo={setNomeGrupo}
                              createServicoSelecionado={createGroup}
                              closeModal={closeModal}
                            />
                            <ModalMesa
                              isOpen={isModalOpenMesa}
                              onClose={closeModalMesa}
                              nomeGrupo={nomeMesa}
                              setNomeGrupo={setNomeMesa}
                              createServicoSelecionado={createMesa}
                              closeModal={closeModalMesa}
                            />
                            <ModalConvidado
                              isOpen={isModalOpenConvidado}
                              onClose={closeModalConvidado}
                              nomeConvidado={nomeConvidado}
                              setNomeConvidado={setNomeConvidado}
                              createServicoSelecionado={createConvidado}
                              listaGruposF={listaGruposF}
                              listaMesasF={listaMesasF}
                              closeModal={closeModalConvidado}
                              setGrupos={setGrupos}
                              setMesas={setMesas}
                              setParticipacao={setParticipacao}
                              setMomento={setMomento}
                            />
                            <button
                              type="button"
                              onClick={openModal}
                              className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                              + Grupos
                            </button>
                            <button
                              type="button"
                              onClick={openModalMesa}
                              className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                              + Mesas
                            </button>
                            <button
                              type="button"
                              onClick={openModalConvidado}
                              className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                            >
                              + Convidado
                            </button>
                          </div>
                          {/* <div className="flex flex-row gap-12">
                            <div className="flex flex-row gap-4">
                              <div className="w-80">
                                <div className="relative flex w-full flex-wrap items-stretch">
                                  <input
                                    type="search"
                                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                  />

                                  <span
                                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                    id="basic-addon2"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="h-5 w-5"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="w-24">
                              <DropDown />
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Convidados Especiais</p>
                        <p className="text-sm">.</p>
                      </div>
                      <hr />
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                  <tr>
                                    <th scope="col" className=" px-6 py-4">
                                      #
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Nome
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Mesa
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Participação
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Status
                                    </th>
                                    <th scope="col" className=" px-6 py-4"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listaConvidados.length > 0 && (
                                    <>
                                      {listaConvidados.map(
                                        (convidado, index) => (
                                          <>
                                            {convidado.grupos ===
                                              "Convidados Especiais" && (
                                              <>
                                                <tr className="border-b dark:border-neutral-500">
                                                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    {index + 1}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.nomeConvidado}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.mesas}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.participacao}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500">
                                                    {convidado.status}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500 cursor-pointer">
                                                    <FaRegTrashAlt
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleDeleteServico(
                                                          convidado._id
                                                        )
                                                      }
                                                    />
                                                  </td>
                                                </tr>
                                              </>
                                            )}
                                          </>
                                        )
                                      )}
                                    </>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 mb-6">
                      <p className="font-bold mt-12">Familiares da Noiva</p>
                      <hr />
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                  <tr>
                                    <th scope="col" className=" px-6 py-4">
                                      #
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Nome
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Mesa
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Momento
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Participação
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Status
                                    </th>
                                    <th scope="col" className=" px-6 py-4"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listaConvidados.length > 0 && (
                                    <>
                                      {listaConvidados.map(
                                        (convidado, index) => (
                                          <>
                                            {convidado.grupos ===
                                              "Familiares da Noiva" && (
                                              <>
                                                <tr className="border-b dark:border-neutral-500">
                                                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    {index + 1}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.nomeConvidado}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.mesas}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.momento2}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.participacao}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500">
                                                    {convidado.status}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500 cursor-pointer">
                                                    <FaRegTrashAlt
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleDeleteServico(
                                                          convidado._id
                                                        )
                                                      }
                                                    />
                                                  </td>
                                                </tr>
                                              </>
                                            )}
                                          </>
                                        )
                                      )}
                                    </>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-bold mt-12">Familiares do Noivo</p>
                      <hr />
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                  <tr>
                                    <th scope="col" className=" px-6 py-4">
                                      #
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Nome
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Mesa
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Momento
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Participação
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Status
                                    </th>
                                    <th scope="col" className=" px-6 py-4"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listaConvidados.length > 0 && (
                                    <>
                                      {listaConvidados.map(
                                        (convidado, index) => (
                                          <>
                                            {convidado.grupos ===
                                              "Familiares do Noivo" && (
                                              <>
                                                <tr className="border-b dark:border-neutral-500">
                                                  <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    {index + 1}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.nomeConvidado}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.mesas}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.momento2}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4">
                                                    {convidado.participacao}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500">
                                                    {convidado.status}
                                                  </td>
                                                  <td className="whitespace-nowrap  px-6 py-4 text-red-500 cursor-pointer">
                                                    <FaRegTrashAlt
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleDeleteServico(
                                                          convidado._id
                                                        )
                                                      }
                                                    />
                                                  </td>
                                                </tr>
                                              </>
                                            )}
                                          </>
                                        )
                                      )}
                                    </>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-bold mt-12">Outros</p>
                      <hr />
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                  <tr>
                                    <th scope="col" className=" px-6 py-4">
                                      #
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Nome
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Mesa
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Momento
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Participação
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                      Status
                                    </th>
                                    <th scope="col" className=" px-6 py-4"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listaConvidados.length > 0 && (
                                    <>
                                      {listaConvidados.map(
                                        (convidado, index) => (
                                          <>
                                            {convidado.grupos !=
                                              "Familiares do Noivo" &&
                                              convidado.grupos !=
                                                "Familiares da Noiva" &&
                                              convidado.grupos !=
                                                "Convidados Especiais" && (
                                                <>
                                                  <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                      {index + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                      {convidado.nomeConvidado}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                      {convidado.mesas}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                      {convidado.momento2}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                      {convidado.participacao}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500">
                                                      {convidado.status}
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4 text-red-500 cursor-pointer">
                                                      <FaRegTrashAlt
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                          handleDeleteServico(
                                                            convidado._id
                                                          )
                                                        }
                                                      />
                                                    </td>
                                                  </tr>
                                                </>
                                              )}
                                          </>
                                        )
                                      )}
                                    </>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {" "}
                      <button
                        onClick={() => setIsRSVP((prev) => !prev)}
                        type="button"
                        className="my-8 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Enviar RSVP
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="flex justify-center">
            {/* habilitado caso haja pelomenos um convidado por receber o convite */}
            {IsRSVP ? (
              <>
                <button
                  onClick={() => setIsRSVP((prev) => !prev)}
                  type="button"
                  className="my-8 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Voltar
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-12"></div>
        </>
      )}
    </div>
  );
}
export default Convidados;
// O formulário de registro deverá pedir o numero de convidados expeciais e outros convidados separadamente, estes dados serão usados no RSVP das tabelas dos convidados especiais e outros convidados respectivamente
