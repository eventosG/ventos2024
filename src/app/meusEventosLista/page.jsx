"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { image } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function MeusEventosList() {
  const { user } = useUser();
  const router = useRouter();

  const [listaEvento, setListaEvento] = useState([]);
  const [idSelcecionado, setIdSelcecionado] = useState("");
  const [actualizar, setActualizar] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [id, setId] = useState("");
  let listaEventosVolatel = [];
  useEffect(() => {
    fetch("api/eventos/get", {
      cache: "no-store",
    }) // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        listaEventosVolatel = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaEventosVolatel.push(evento);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaEvento(listaEventosVolatel);
      });
  }, [user?.fullName, user?.primaryEmailAddress?.emailAddress,actualizar]);
  const toggleDropdown = (id) => {
    setIsOpen(!isOpen);
    setIdSelcecionado(id);
    setId(id);
  };
  const toggleDropdown2 = (id) => {
    setIsOpen2(!isOpen);
    setIdSelcecionado(id);
    setId(id);
  };
  const EditarEvento = (id, tipoEvento) => {
    setIsOpen2(false);
    setIdSelcecionado(id);
    setId(id);
  };
  const listaImagens = [
    {
      image: "/assets/images/casamento22.png",
      tema: "Casamento",
    },
    {
      image: "/assets/images/lobolo.png",
      tema: "Lobolo",
    },
    {
      image: "/assets/images/arco.png",
      tema: "Anelamento",
    },
    {
      image: "/assets/images/despedidaSolteiro.png",
      tema: "Despedida de Solteiro",
    },
    {
      image: "/assets/images/aniversario.png",
      tema: "Aniversário",
    },
    {
      image: "/assets/images/graduacao.png",
      tema: "Graduação",
    },
    {
      image: "/assets/images/almoco.png",
      tema: "Sociais",
    },
  ];
   const activo = async () => {
    setActualizar("a1");
    setIsOpen(false);
      toast.info(
        `Editando... Aguarde um momento por favor!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      try {
        const response = await fetch(`/api/eventos/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            status: "Activo",
          }),
        });
        if (response.status === 201 || response.status === 200) {
          toast.success(
            `Editado com Sucesso!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      } catch (error) {
        toast.error(`🦄 Erro ao editar ${error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setActualizar("a2");
        router.refresh(); // Atualiza a página sem recarregar totalmente
      }
    };
    const cancelar = async () => {
      setActualizar("a3");
      setIsOpen(false);
      toast.info(
        `Editando... Aguarde um momento por favor!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      try {
        const response = await fetch(`/api/eventos/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            status: "Cancelado",
          }),
        });
        if (response.status === 201 || response.status === 200) {
          toast.success(
            `Editado com Sucesso!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      } catch (error) {
        toast.error(`🦄 Erro ao editar ${error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setActualizar("a4");
        router.refresh(); // Atualiza a página sem recarregar totalmente
      }
    };
    const pendente = async () => {
      setActualizar("a5");
      setIsOpen(false);
      toast.info(
        `Editando... Aguarde um momento por favor!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      try {
        const response = await fetch(`/api/eventos/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            status: "Pendente",
          }),
        });
        if (response.status === 201 || response.status === 200) {
          toast.success(
            `Editado com Sucesso!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      } catch (error) {
        toast.error(`🦄 Erro ao editar ${error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setActualizar("a6");
        router.refresh(); // Atualiza a página sem recarregar totalmente
      }
    };
    const concluido = async () => {
      setActualizar("a7");
      setIsOpen(false);
      toast.info(
        `Editando... Aguarde um momento por favor!`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      try {
        const response = await fetch(`/api/eventos/edit/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            status: "Concluido",
          }),
        });
        if (response.status === 201 || response.status === 200) {
          toast.success(
            `Editado com Sucesso!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      } catch (error) {
        toast.error(`🦄 Erro ao editar ${error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setActualizar("a8");
        router.refresh(); // Atualiza a página sem recarregar totalmente
      }
    };
    const handleDelete = async () => {
      setActualizar("a9");
      setIsOpen2(false);
      if (!confirm("Tem certeza que deseja remover este evento?")) return;
  
      try {
        const res = await fetch(`/api/eventos/delete/${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          setActualizar("a10");
          alert("Evento removido com sucesso!");
          router.refresh(); // Atualiza a página sem recarregar completamente
        } else {
          const data = await res.json();
          alert(`Erro: ${data.message}`);
        }
      } catch (error) {
        console.error("Erro ao remover evento:", error);
      }
    };
    const handleEventoSelected = async (tipoEvSelected) => {
      localStorage.setItem('tipoEvento', tipoEvSelected);
      router.push("/planificacao");
    };
  return (
    <>
      <div className="container lg:mx-auto lg:min-h-50vh h-screen">
        <div className="flex flex-row justify-center">
          <div className="w-1/2">
            <div class="grid grid-cols-6 gap-1 my-4 bg-blue-200 p-2 rounded-lg">
              <div className="flex flex-row gap-1 w-[115px] bg-blue-50 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <p className="font-bold text-[12px]">Cancelado</p>
              </div>
              <div className="flex flex-row gap-1 w-[115px] bg-blue-50 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <p className="font-bold text-[12px]">Activo</p>
              </div>
              <div className="flex flex-row gap-1 w-[115px] bg-blue-50 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-orange-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <p className="font-bold text-[12px]">Pendente</p>
              </div>
              <div className="flex flex-row gap-1 w-[115px] bg-blue-50 p-2 rounded-lg col-span-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <p className="font-bold text-[12px]">Concluido</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-1 w-[115px] cursor-pointer hover:text-white hover:bg-blue-500 bg-blue-50 p-2 rounded-lg">
                <a href="/novoEvento">
                  <span className="font-bold text-[12px]">+ Evento</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nr className="my-4" />
        <div class="grid grid-cols-8 gap-4 my-4 lg:px-20">
          {listaEvento.length > 0 ? (
            <>
              {listaEvento.map((evento, index) => (
                <>
                  <div className="shadow-md p-4">
                    <div className="flex justify-between">
                      <div className="cursor-pointer">
                        <div className="relative">
                          {/* Ícone que ao clicar, mostra a lista */}
                          <button
                            onClick={() => toggleDropdown(evento._id)}
                            className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 30 30"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className={`size-6 ${
                                evento.status === "Activo"
                                  ? "text-green-500"
                                  : evento.status === "Cancelado"
                                  ? "text-red-500"
                                  : evento.status === "Pendente"
                                  ? "text-orange-500"
                                  : "text-blue-500"
                              }`}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 6h.008v.008H6V6Z"
                              />
                            </svg>
                          </button>

                          {/* Lista que aparece quando o ícone é clicado */}
                          {isOpen && (
                            <>
                              {idSelcecionado === evento._id && (
                                <>
                                  <ul className="absolute top-10 w-20 right-0 bg-white border border-blue-200 rounded shadow-lg">
                                    <li
                                      className="px-2 py-2 text-[12px] text-red-500 hover:bg-blue-200 font-bold"
                                      onClick={() => cancelar()}
                                    >
                                      Cancelar
                                    </li>
                                    <li
                                      className="px-2 py-2 text-[12px] text-orange-500 hover:bg-blue-200 font-bold"
                                      onClick={() => pendente()}
                                    >
                                      Pendente
                                    </li>
                                    <li
                                      className="px-2 py-2 text-[12px] text-blue-500 hover:bg-blue-200 font-bold"
                                      onClick={() => concluido()}
                                    >
                                      Concluido
                                    </li>
                                    <li
                                      className="px-2 py-2 text-[12px] text-green-500 hover:bg-blue-200 font-bold"
                                      onClick={() => activo()}
                                    >
                                      Activar
                                    </li>
                                  </ul>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="relative">
                          {/* Ícone que ao clicar, mostra a lista */}
                          <button
                            onClick={() => toggleDropdown2(evento._id)}
                            className="flex items-center justify-center w-8 h-8 "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 30 30"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                              />
                            </svg>
                          </button>

                          {/* Lista que aparece quando o ícone é clicado */}
                          {isOpen2 && (
                            <>
                              {idSelcecionado === evento._id && (
                                <>
                                  <ul className="absolute top-10 w-20 right-0 bg-white border border-blue-200 rounded shadow-lg">
                                    <li
                                      className="px-2 py-2 text-[12px] text-red-500 hover:bg-blue-200 font-bold"
                                      onClick={() => handleDelete()}
                                    >
                                      Eliminar
                                    </li>
                                    <li
                                      className="px-2 py-2 text-[12px] text-blue-500 hover:bg-blue-200 font-bold"
                                      onClick={() =>
                                        EditarEvento(
                                          evento._id,
                                          evento.tipoEvento
                                        )
                                      }
                                    >
                                      <a href={`/meusEventosLista/editar/${evento.tipoEvento}`}>Editar</a>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {listaImagens.map((imagem) => (
                      <>
                        {imagem.tema === evento.tipoEvento && (
                          <Image
                            width={200}
                            height={100}
                            alt="NextUI hero Image"
                            className="cursor-pointer"
                            onClick={() => handleEventoSelected(evento.tipoEvento)}
                            src={imagem.image}
                          />
                        )}
                      </>
                    ))}
                    <hr className="mt-4" />
                    <div className="text-center">
                      <p className="font-bold text-sm">{evento.tipoEvento}</p>
                    </div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
