"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
// import Reactphone from "./Reactphone";

function FormEdit({ params }) {
  const router = useRouter();
  const { user } = useUser();
  // const { tipoEvent } = router.query;
  const [tipoEvento, setTipoEvento] = useState(false);
  const [eventosSelect, setEventosSelect] = useState("Casamento");
  const [eventosSelect2, setEventosSelect2] = useState("Quê Es?");
  const [planificadorEvento, setPlanificadorEvento] =
    useState("Planificador(a)");
  const [nomePlanificador, setNomePlanificador] = useState("");
  const [contactoPlanificador, setContactoPlanificador] = useState("");
  const [nomeNoiva, setNomeNoiva] = useState("");
  const [nomeNoivo, setNomeNoivo] = useState("");
  const [contactoNoiva, setContactoNoiva] = useState("");
  const [contactoNoivo, setContactoNoivo] = useState("");
  const [numeroCasaQuarteirao, setNumeroCasaQuarteirao] = useState("");
  const [avenidaRua, setAvenidaRua] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");
  const [temaEvento, setTemaEvento] = useState("");
  const [orcamentoInicial, setOrcamentoInicial] = useState("");
  const [coresEvento, setCoresEvento] = useState("Preto");
  const [convidadosPrevistos, setConvidadosPrevistos] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [provinciaSelecionada, setProvinciaSelecionada] = useState("");
  const [distritoSelecionado, setDistritoSelecionado] = useState("");
  const [bairroSelecionado, setBairroSelecionado] = useState("");
  const [tipodeBodas, setTipodeBodas] = useState("");
  const [id, setId] = useState("");
  const [bodas, setBodas] = useState(false);
  const [casamentoNormal, setCasamentoNormal] = useState(true);
  const [estado, setEstado] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const pronvincias = [
    "Seleccione a Província",
    "Maputo Cidade",
    "Maputo Província",
  ];
  const distritoProvinciaMaputo = ["Boane", "Marracuene", "Matola"];
  const distritoPMaputoBoane = [
    "Vila de Boane",
    "Eduardo Mondlane",
    "Gueguegue",
    "Matola-Rio Sede",
  ];
  const distritoPMaputoMarracuene = [
    "Santa Isabel",
    "Chiboene",
    "Facim",
    "Agostinho Neto",
    "Phazimane",
    "Memo 1",
    "Memo 2",
    "Michafutene",
    "Novo Cemitério",
    "Bobole",
    "Vila de Marraquene",
  ];
  const distritoPMaputoMatola = [
    "Zona Verde",
    "Ndlavela",
    "Infulene D",
    "T-3",
    "Acordos de Lusaka",
    "Khongolote",
    "Intaca",
    "Boquisso",
    "Mali",
    "Mukatine",
    "Ngolhoza",
    "Infulene",
    "Trevo",
    "Patrice Lumumba",
    "Machava",
    "São Damaso",
    "Tsalala",
    "Mathlemele",
    "Nkobe",
    "Matola Gare",
    "Singathela",
    "Fomento",
    "Liberdade",
    "Malhampsene",
    "Tchumene",
    "Outro",
  ];
  const distritoCidadeMaputo = [
    "Seleccione o Distrito",
    "KaMpfumu",
    "Nlhamankulu",
    "KaMaxakeni",
    "KaMavota",
    "KaMubukwana",
    "KaTembe",
    "KaNyaka",
  ];
  const bairroCMaputoKaMpfumu = [
    "Seleccione o Bairro",
    "Alto Maé A",
    "Alto Maé B",
    "Central A",
    "Central B",
    "Central C",
    "Coop",
    "Malhangalene A",
    "Malhangalene B",
    "Polana-Cimento A",
    "Polana-Cimento B",
    "Sommerschield",
  ];
  const bairroCMaputoNlhamankulu = [
    "Aeroporto A",
    "Chamanculo A",
    "Chamanculo B",
    "Chamanculo C",
    "Chamanculo D",
    "Malanga",
    "Minkadjuine",
    "Munhuana",
    "Unidade 7",
    "Xipamanine",
  ];
  const bairroCMaputoKaMaxakeni = [
    "Mafalala",
    "Maxaquene A",
    "Maxaquene B",
    "Maxaquene C",
    "Maxaquene D",
    "Polana Caniço A",
    "Polana Caniço B",
    "Urbanização",
  ];
  const bairroCMaputoKaMavota = [
    "3 de Fevereiro",
    "Albazine",
    "Costa do Sol",
    "F.P.L.M.",
    "Ferroviário",
    "Hulene A",
    "Hulene B",
    "Laulane",
    "Mahotas",
    "Mavalane A",
    "Mavalane B",
  ];
  const bairroCMaputoKaMubukwana = [
    "25 de Junho A",
    "25 de Junho B",
    "Bagamoyo",
    "George Dimitrov",
    "Inhagóia A",
    "Inhagóia B",
    "Jardim",
    "Luis Cabral",
    "Magoanine A",
    "Magoanine B",
    "Magoanine C",
    "Malhazine",
    "Nsalene",
    "Zimpeto",
  ];
  const bairroCMaputoKaTembe = [
    "Inguide",
    "Incassane",
    "Guachene",
    "Chali",
    "Chamissava",
  ];
  const bairroCMaputoKaNyaka = ["Ribzwene", "Inguane", "Nhanquene"];
  useEffect(() => {
    fetch("/api/eventos/get") // Remove qualquer parâmetro da URL
      .then((res) => res.json())
      .then((data) => {
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            if (evento.tipoEvento === params.tipoEvent) {
              setNomePlanificador(evento.nomePlanificador);
              setContactoPlanificador(evento.contactoPlanificador);
              setNomeNoiva(evento.nomeNoiva);
              setNomeNoivo(evento.nomeNoivo);
              setContactoNoiva(evento.contactoNoiva);
              setContactoNoivo(evento.contactoNoivo);
              setNumeroCasaQuarteirao(evento.numeroCasaQuarteirao);
              setAvenidaRua(evento.avenidaRua || evento.localEvento);
              setPontoReferencia(evento.pontoReferencia);
              setTemaEvento(evento.temaEvento);
              setOrcamentoInicial(evento.orcamentoInicial);
              setCoresEvento(evento.coresEvento);
              setConvidadosPrevistos(evento.convidadosPrevistos);
              setDataEvento(evento.dataEvento);
              setProvinciaSelecionada(evento.provinciaSelecionada);
              setDistritoSelecionado(evento.distritoSelecionado);
              setBairroSelecionado(evento.bairroSelecionado);
              setTipodeBodas(evento.tipodeBodas);
              setId(evento._id);
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, [
    user?.fullName,
    user?.primaryEmailAddress?.emailAddress,
    params.tipoEvent,
    router.isReady,
  ]);
  useEffect(() => {
    if (casamentoNormal === estado) {
      setCasamentoNormal(true);
      setBodas(false);
    } else {
      setCasamentoNormal(false);
      setBodas(true);
    }
  }, [estado,casamentoNormal]);
  useEffect(() => {
    console.log("Evento Seleccionado", eventosSelect);
  }, [eventosSelect]);
  function verificarEstado() {
    if (estado === true) {
      setEstado(false);
    } else {
      setEstado(true);
    }
  }
  function eventoSeleccionado(evento) {
    setEventosSelect(evento);
    setEventosSelect(evento);
    console.log(params.tipoEvent);
    console.log("Evento Seleccionado", eventosSelect);
  }
  const editarEvento = async ({tipoEvent}) => {
    setSubmitting(true);
    toast.info(
      `Editando ${params.tipoEvent}... Aguarde um momento por favor!`,
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
          criadoPor: user.fullName,
          criadoPorEmail: user.primaryEmailAddress?.emailAddress,
          nomeNoiva,
          contactoNoiva,
          nomeNoivo,
          contactoNoivo,
          planificadorEvento,
          nomePlanificador,
          contactoPlanificador,
          localEvento: avenidaRua,
          provincia: provinciaSelecionada,
          distrito: distritoSelecionado,
          bairro: bairroSelecionado,
          numeroCasaQuarteirao,
          pontoReferencia,
          dataEvento,
          temaEvento,
          orcamentoInicial,
          coresEvento,
          convidadosPrevistos,
          tipoEvento: params.tipoEvent,
          tipodeBodas,
          status: "Activo",
        }),
      });
      if (response.status === 201 || response.status === 200) {
        toast.success(
          `${params.tipoEvent} editado com Sucesso!`,
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
      setSubmitting(false);
    } finally {
      setSubmitting(false);
      router.push("/meusEventosLista");
    }
  };
  return (
    <section className="flex items-center justify-center">
      <div className="w-[550px]">
        {" "}
        <div className="flex flex-col justify-center content-center">
          <h1 className="text-center text-xl p-4 mt-8">
            <span className="">Editar {params.tipoEvent}</span>
          </h1>
          <div className="bg-blue-100 p-8 my-4 rounded-xl">
            {params.tipoEvent === "Casamento" && (
              <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                {casamentoNormal ? (
                  <>
                    <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                      <h3>Casamento Normal</h3>
                      <button
                        type="button"
                        onClick={() => verificarEstado("bodas")}
                        className="black_btn"
                      >
                        Bodas
                      </button>
                    </label>
                    <span className="font-normal">Quem és?</span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                    >
                      <option
                        value="Planificador(a)"
                        onClick={() => setPlanificadorEvento("Planificador(a)")}
                      >
                        Planificador(a)
                      </option>
                      <option
                        value="Noivo"
                        onClick={() => setPlanificadorEvento("Noivo(a)")}
                      >
                        Noivo
                      </option>
                      <option
                        value="Noiva"
                        onClick={() => setPlanificadorEvento("Noivo(a)")}
                      >
                        Noiva
                      </option>
                    </select>

                    <div className="flex flex-row gap-4">
                      <input
                        value={nomePlanificador}
                        onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder="Nome"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={contactoPlanificador}
                        onChange={(e) =>
                          setContactoPlanificador(e.target.value)
                        }
                        placeholder="Contacto com whatsapp"
                        required
                        type="text"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Nome dos Noivos</span>
                    <div className="flex flex-row gap-4">
                      <input
                        value={nomeNoiva}
                        onChange={(e) => setNomeNoiva(e.target.value)}
                        placeholder="Nome da Noiva"
                        type="text"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={nomeNoivo}
                        onChange={(e) => setNomeNoivo(e.target.value)}
                        placeholder="Nome do Noivo"
                        required
                        type="text"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row gap-4">
                      <input
                        value={contactoNoiva}
                        onChange={(e) => setContactoNoiva(e.target.value)}
                        placeholder="Contacto da Noiva"
                        type="number"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={contactoNoivo}
                        onChange={(e) => setContactoNoivo(e.target.value)}
                        placeholder="Contacto do Noivo"
                        required
                        type="number"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Residência dos Noivos</span>
                    <div className="flex flex-row gap-4">
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) =>
                          setProvinciaSelecionada(e.target.value)
                        }
                      >
                        {pronvincias.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                      {provinciaSelecionada === "Maputo Cidade" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) =>
                            setDistritoSelecionado(e.target.value)
                          }
                        >
                          {distritoCidadeMaputo.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {provinciaSelecionada === "Maputo Província" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) =>
                            setDistritoSelecionado(e.target.value)
                          }
                        >
                          {distritoProvinciaMaputo.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="flex flex-row gap-4">
                      {distritoSelecionado === "KaMpfumu" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMpfumu.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Nlhamankulu" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoNlhamankulu.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMaxakeni" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMaxakeni.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMavota" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMavota.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMubukwana" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMubukwana.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaTembe" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaTembe.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaNyaka" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaNyaka.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Boane" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoBoane.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Marracuene" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoMarracuene.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Matola" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoMatola.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        value={numeroCasaQuarteirao}
                        onChange={(e) =>
                          setNumeroCasaQuarteirao(e.target.value)
                        }
                        placeholder="Número de Quarteirão e Casa"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row gap-4">
                      <input
                        value={avenidaRua}
                        onChange={(e) => setAvenidaRua(e.target.value)}
                        placeholder="Avenida/Rua"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={pontoReferencia}
                        onChange={(e) => setPontoReferencia(e.target.value)}
                        placeholder="Ponto de Referência"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Data do Casamento</span>
                    <input
                      type="date"
                      value={dataEvento}
                      onChange={(e) => setDataEvento(e.target.value)}
                      placeholder="Data do Evento"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Tema do Casamento</span>
                    <input
                      value={temaEvento}
                      onChange={(e) => setTemaEvento(e.target.value)}
                      placeholder="(Opcinal)"
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Orçamento</span>
                    <input
                      value={orcamentoInicial}
                      onChange={(e) => setOrcamentoInicial(e.target.value)}
                      placeholder="Orçamento Inicial"
                      type="number"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Cores do Casamento</span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setCoresEvento(e.target.value)}
                    >
                      <option value="Preto">Preto</option>
                      <option value="Branco">Branco</option>
                      <option value="Azul">Azul</option>
                      <option value="Preto/Branco">Preto/Branco</option>
                      <option value="Branco/Azul">Branco/Azul</option>
                      <option value="Azul/Preto">Azul/Preto</option>
                    </select>
                    <span className="font-normal">Convidados Previstos</span>
                    <input
                      value={convidadosPrevistos}
                      onChange={(e) => setConvidadosPrevistos(e.target.value)}
                      placeholder="Número de Convidados"
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                    <div className="flex-end mx-3 mb-5 gap-4">
                      <Link
                        href={"/"}
                        className="text-gray-500 px-5 py-1.5 text-sm rounded-full hover:bg-red-500 hover:text-white"
                      >
                        Cancelar
                      </Link>

                      <button
                        type="submit"
                        disabled={submitting}
                        onClick={() => editarEvento("Casamento")}
                        className="px-5 py-1.5 text-sm rounded-full text-black  hover:bg-blue-500 hover:text-white"
                      >
                        Editar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                      <h3>Bodas</h3>
                      <button
                        type="button"
                        onClick={() => verificarEstado("bodas")}
                        className="black_btn"
                      >
                        Casamento Normal
                      </button>
                    </label>
                    <span className="font-normal">Tipo de Boda</span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setTipodeBodas(e.target.value)}
                    >
                      <option value="Bodas de Papel (01 Ano)">
                        Bodas de Papel (01 Ano)
                      </option>
                      <option value="Bodas de Madeira ou Ferro (05 Ano)">
                        Bodas de Madeira ou Ferro (05 Ano)
                      </option>
                      <option value="Bodas de Estanho ou Zinho (10 Ano)">
                        Bodas de Estanho ou Zinho (10 Ano)
                      </option>
                      <option value="Bodas de Cristal (15 Ano)">
                        Bodas de Cristal (15 Ano)
                      </option>
                      <option value="Bodas de Porcelana (20 Ano)">
                        Bodas de Porcelana (20 Ano)
                      </option>
                      <option value="Bodas de Prata (25 Ano)">
                        Bodas de Prata (25 Ano)
                      </option>
                      <option value="Bodas de Pérola (30 Ano)">
                        Bodas de Pérola (30 Ano)
                      </option>
                      <option value="Bodas de Coral (35 Ano)">
                        Bodas de Coral (35 Ano)
                      </option>
                      <option value="Bodas de Esmeralda (40 Ano)">
                        Bodas de Esmeralda (40 Ano)
                      </option>
                      <option value="Bodas de Platina (45 Ano)">
                        Bodas de Platina (45 Ano)
                      </option>
                      <option value="Bodas de Ouro (50 Ano)">
                        Bodas de Ouro (50 Ano)
                      </option>
                    </select>
                    <span className="font-normal">Quem és?</span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                    >
                      <option
                        value="Planificador(a)"
                        onClick={() => setPlanificadorEvento("Planificador(a)")}
                      >
                        Planificador(a)
                      </option>
                      <option
                        value="Noivo"
                        onClick={() => setPlanificadorEvento("Noivo")}
                      >
                        Noivo
                      </option>
                      <option
                        value="Noiva"
                        onClick={() => setPlanificadorEvento("Noiva")}
                      >
                        Noiva
                      </option>
                    </select>

                    <div className="flex flex-row gap-4">
                      <input
                        value={nomePlanificador}
                        onChange={(e) => setNomePlanificador(e.target.value)}
                        placeholder="Nome"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={contactoPlanificador}
                        onChange={(e) =>
                          setContactoPlanificador(e.target.value)
                        }
                        placeholder="Contacto com whatsapp"
                        required
                        type="text"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Nome dos Noivos</span>
                    <div className="flex flex-row gap-4">
                      <input
                        value={nomeNoiva}
                        onChange={(e) => setNomeNoiva(e.target.value)}
                        placeholder="Nome da Noiva"
                        type="text"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={nomeNoivo}
                        onChange={(e) => setNomeNoivo(e.target.value)}
                        placeholder="Nome do Noivo"
                        required
                        type="text"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row gap-4">
                      <input
                        value={contactoNoiva}
                        onChange={(e) => setContactoNoiva(e.target.value)}
                        placeholder="Contacto da Noiva"
                        type="number"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={contactoNoivo}
                        onChange={(e) => setContactoNoivo(e.target.value)}
                        placeholder="Contacto do Noivo"
                        required
                        type="number"
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Residência dos Noivos</span>
                    <div className="flex flex-row gap-4">
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) =>
                          setProvinciaSelecionada(e.target.value)
                        }
                      >
                        {pronvincias.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                      {provinciaSelecionada === "Maputo Cidade" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) =>
                            setDistritoSelecionado(e.target.value)
                          }
                        >
                          {distritoCidadeMaputo.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {provinciaSelecionada === "Maputo Província" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) =>
                            setDistritoSelecionado(e.target.value)
                          }
                        >
                          {distritoProvinciaMaputo.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="flex flex-row gap-4">
                      {distritoSelecionado === "KaMpfumu" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMpfumu.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Nlhamankulu" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoNlhamankulu.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMaxakeni" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMaxakeni.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMavota" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMavota.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaMubukwana" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaMubukwana.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaTembe" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaTembe.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "KaNyaka" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {bairroCMaputoKaNyaka.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Boane" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoBoane.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Marracuene" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoMarracuene.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      {distritoSelecionado === "Matola" && (
                        <select
                          name="cars2"
                          id="cars2"
                          className="form_input p-1 rounded-xl"
                          onChange={(e) => setBairroSelecionado(e.target.value)}
                        >
                          {distritoPMaputoMatola.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        value={numeroCasaQuarteirao}
                        onChange={(e) =>
                          setNumeroCasaQuarteirao(e.target.value)
                        }
                        placeholder="Número de Quarteirão e Casa"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row gap-4">
                      <input
                        value={avenidaRua}
                        onChange={(e) => setAvenidaRua(e.target.value)}
                        placeholder="Avenida/Rua"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                      <input
                        value={pontoReferencia}
                        onChange={(e) => setPontoReferencia(e.target.value)}
                        placeholder="Ponto de Referência"
                        required
                        className="form_input p-1 rounded-xl"
                      />
                    </div>
                    <span className="font-normal">Data do Evento</span>
                    <input
                      type="date"
                      value={dataEvento}
                      onChange={(e) => setDataEvento(e.target.value)}
                      placeholder="Data do Evento"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Tema das Bodas</span>
                    <input
                      value={temaEvento}
                      onChange={(e) => setTemaEvento(e.target.value)}
                      placeholder="(Opcinal)"
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Orçamento</span>
                    <input
                      value={orcamentoInicial}
                      onChange={(e) => setOrcamentoInicial(e.target.value)}
                      placeholder="Orçamento Inicial"
                      type="number"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <span className="font-normal">Cores das Bodas</span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setCoresEvento(e.target.value)}
                    >
                      <option value="Preto">Preto</option>
                      <option value="Branco">Branco</option>
                      <option value="Azul">Azul</option>
                      <option value="Preto/Branco">Preto/Branco</option>
                      <option value="Branco/Azul">Branco/Azul</option>
                      <option value="Azul/Preto">Azul/Preto</option>
                    </select>
                    <span className="font-normal">Convidados Previstos</span>
                    <input
                      value={convidadosPrevistos}
                      onChange={(e) => setConvidadosPrevistos(e.target.value)}
                      placeholder="Número de Convidados"
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                    <div className="flex-end mx-3 mb-5 gap-4">
                      <Link
                        href={"/"}
                        className="text-gray-500 px-5 py-1.5 rounded-full text-sm hover:bg-red-500 hover:text-white"
                      >
                        Cancelar
                      </Link>
                      <button
                        type="submit"
                        disabled={submitting}
                        onClick={() => editarEvento("Bodas")}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-black hover:bg-blue-500 hover:text-white"
                      >
                        Editar
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
            {params.tipoEvent === "Lobolo" && (
              <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Lobolo</h3>
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Nome dos Noivos</span>
                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                      placeholder="Nome da Noiva"
                      type="text"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Nome do Noivo"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto da Noiva"
                      type="number"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoNoivo}
                      onChange={(e) => setContactoNoivo(e.target.value)}
                      placeholder="Contacto do Noivo"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Residência dos Noivos</span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {/* <input
                      value={evento.localEvento}
                      onChange={(e) =>
                        setEvento({ ...evento, localEvento: e.target.value })
                      }
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    /> */}
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data do Evento</span>
                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data do Evento"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tema do Lobolo</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Cores do Lobolo</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                    onChange={(e) => setCoresEvento(e.target.value)}
                  >
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                    <option value="Azul">Azul</option>
                    <option value="Preto/Branco">Preto/Branco</option>
                    <option value="Branco/Azul">Branco/Azul</option>
                    <option value="Azul/Preto">Azul/Preto</option>
                  </select>
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={convidadosPrevistos}
                    onChange={(e) => setConvidadosPrevistos(e.target.value)}
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>
                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Lobolo")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
            {params.tipoEvent === "Anelamento" && (
              <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Anelamento</h3>
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Nome dos Noivos</span>
                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                      placeholder="Nome da Noiva"
                      type="text"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Nome do Noivo"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto da Noiva"
                      type="number"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoNoivo}
                      onChange={(e) => setContactoNoivo(e.target.value)}
                      placeholder="Contacto do Noivo"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Residência dos Noivos</span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      value={numeroCasaQuarteirao}
                      onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data do Evento</span>
                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data do Evento"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tema do Anelamento</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Cores do Anelamento</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                    onChange={(e) => setCoresEvento(e.target.value)}
                  >
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                    <option value="Azul">Azul</option>
                    <option value="Preto/Branco">Preto/Branco</option>
                    <option value="Branco/Azul">Branco/Azul</option>
                    <option value="Azul/Preto">Azul/Preto</option>
                  </select>
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={convidadosPrevistos}
                    onChange={(e) => setConvidadosPrevistos(e.target.value)}
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>

                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Anelamento")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
            {params.tipoEvent === "Despedida de Solteiro" && (
              <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Despedida de Solteiro</h3>
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <span className="font-normal">
                      Para quem é a despedida de solteiro?
                    </span>
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                    >
                      <option value="Diga para quem é a despedida">
                        Diga para quem é a despedida
                      </option>
                      <option value="Noiva">Noiva</option>
                      <option value="Noivo">Noivo</option>
                    </select>
                  </div>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Nome"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Residência do(a) Noivo(a)</span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      value={numeroCasaQuarteirao}
                      onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data da Despediada</span>
                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data do Evento"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tema da Despedida</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Cores da Despedida</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                    onChange={(e) => setCoresEvento(e.target.value)}
                  >
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                    <option value="Azul">Azul</option>
                    <option value="Preto/Branco">Preto/Branco</option>
                    <option value="Branco/Azul">Branco/Azul</option>
                    <option value="Azul/Preto">Azul/Preto</option>
                  </select>
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={convidadosPrevistos}
                    onChange={(e) => setConvidadosPrevistos(e.target.value)}
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>
                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Despedida de Solteiro")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
            {params.tipoEvent === "Aniversário" && (
              <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Aniversário</h3>
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Dados do Aniversariante</span>
                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                      placeholder="Nome do Aniversariante"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Idade"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <button type="button" onClick={() => {}}>
                    + Aniversariante
                  </button>
                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto do Aniversariante/Encarregado"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoNoivo}
                      onChange={(e) => setContactoNoivo(e.target.value)}
                      placeholder="Sexo do Aniversariante"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">
                    Residência do Aniversariante
                  </span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      value={numeroCasaQuarteirao}
                      onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data do Aniversário</span>
                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data do Aniversário"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tema do Aniversário</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Cores do Aniversário</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                    onChange={(e) => setCoresEvento(e.target.value)}
                  >
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                    <option value="Azul">Azul</option>
                    <option value="Preto/Branco">Preto/Branco</option>
                    <option value="Branco/Azul">Branco/Azul</option>
                    <option value="Azul/Preto">Azul/Preto</option>
                  </select>
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={evento.orcamentoInicial}
                    onChange={(e) =>
                      setEvento({ ...evento, orcamentoInicial: e.target.value })
                    }
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>

                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Aniversário")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
            {params.tipoEvent === "Graduação" && (
              <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
              >
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Graduação</h3>
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Dados do Graduado</span>
                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                      placeholder="Nome do Graduado"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Idade"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>

                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto do Graduado"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoNoivo}
                      onChange={(e) => setContactoNoivo(e.target.value)}
                      placeholder="Sexo do Graduado"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <button type="button" onClick={() => {}}>
                    + Graduado
                  </button>
                  <span className="font-normal">Residência do Graduado</span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      value={numeroCasaQuarteirao}
                      onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data da Graduação</span>
                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data da Graduação"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tema da Graduação</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={convidadosPrevistos}
                    onChange={(e) => setConvidadosPrevistos(e.target.value)}
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>
                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Graduação")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
            {params.tipoEvent === "Sociais" && (
              <form
                // onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
              >
                <>
                  <label className="flex flex-row font-satoshi font-semibold text-base text-gray-700 text-center gap-4 justify-center content-center">
                    <h3>Sociais</h3>
                    {/* <Reactphone /> */}
                  </label>
                  <span className="font-normal">Quem és?</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                  >
                    <option
                      value="Planificador(a)"
                      onClick={() => setPlanificadorEvento("Planificador(a)")}
                    >
                      Planificador(a)
                    </option>
                    <option
                      value="Noivo"
                      onClick={() => setPlanificadorEvento("Noivo")}
                    >
                      Noivo
                    </option>
                    <option
                      value="Noiva"
                      onClick={() => setPlanificadorEvento("Noiva")}
                    >
                      Noiva
                    </option>
                  </select>

                  <div className="flex flex-row gap-4">
                    <input
                      value={nomePlanificador}
                      onChange={(e) => setNomePlanificador(e.target.value)}
                      placeholder="Nome"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoPlanificador}
                      onChange={(e) => setContactoPlanificador(e.target.value)}
                      placeholder="Contacto com whatsapp"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Dados do Anfitrião</span>
                  <div className="flex flex-row gap-4">
                    <input
                      value={nomeNoiva}
                      onChange={(e) => setNomeNoiva(e.target.value)}
                      placeholder="Nome do Anfitrião"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={nomeNoivo}
                      onChange={(e) => setNomeNoivo(e.target.value)}
                      placeholder="Idade"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>

                  <div className="flex flex-row gap-4">
                    <input
                      value={contactoNoiva}
                      onChange={(e) => setContactoNoiva(e.target.value)}
                      placeholder="Contacto do Anfitrião"
                      required
                      type="number"
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={contactoNoivo}
                      onChange={(e) => setContactoNoivo(e.target.value)}
                      placeholder="Sexo do Anfitrião"
                      required
                      type="text"
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Residência do Anfitrião</span>
                  <div className="flex flex-row gap-4">
                    <select
                      name="cars2"
                      id="cars2"
                      className="form_input p-1 rounded-xl"
                      onChange={(e) => setProvinciaSelecionada(e.target.value)}
                    >
                      {pronvincias.map((provincia) => (
                        <option key={provincia} value={provincia}>
                          {provincia}
                        </option>
                      ))}
                    </select>
                    {provinciaSelecionada === "Maputo Cidade" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoCidadeMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {provinciaSelecionada === "Maputo Província" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setDistritoSelecionado(e.target.value)}
                      >
                        {distritoProvinciaMaputo.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {distritoSelecionado === "KaMpfumu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMpfumu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Nlhamankulu" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoNlhamankulu.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMaxakeni" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMaxakeni.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMavota" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMavota.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaMubukwana" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaMubukwana.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaTembe" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaTembe.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "KaNyaka" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {bairroCMaputoKaNyaka.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Boane" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoBoane.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Marracuene" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMarracuene.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    {distritoSelecionado === "Matola" && (
                      <select
                        name="cars2"
                        id="cars2"
                        className="form_input p-1 rounded-xl"
                        onChange={(e) => setBairroSelecionado(e.target.value)}
                      >
                        {distritoPMaputoMatola.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      value={numeroCasaQuarteirao}
                      onChange={(e) => setNumeroCasaQuarteirao(e.target.value)}
                      placeholder="Número de Quarteirão e Casa"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <input
                      value={avenidaRua}
                      onChange={(e) => setAvenidaRua(e.target.value)}
                      placeholder="Avenida/Rua"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                    <input
                      value={pontoReferencia}
                      onChange={(e) => setPontoReferencia(e.target.value)}
                      placeholder="Ponto de Referência"
                      required
                      className="form_input p-1 rounded-xl"
                    />
                  </div>
                  <span className="font-normal">Data do Evento</span>

                  <input
                    type="date"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    placeholder="Data do Evento"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Tipo de Evento Social</span>
                  <select
                    name="cars2"
                    id="cars2"
                    className="form_input p-1 rounded-xl"
                    onChange={(e) => setCoresEvento(e.target.value)}
                  >
                    <option value="Xitique">Xitique</option>
                    <option value="Churasco">Churasco</option>
                    <option value="Outro">Outro</option>
                  </select>
                  <span className="font-normal">Tema do Evento</span>
                  <input
                    value={temaEvento}
                    onChange={(e) => setTemaEvento(e.target.value)}
                    placeholder="(Opcinal)"
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Orçamento</span>
                  <input
                    value={orcamentoInicial}
                    onChange={(e) => setOrcamentoInicial(e.target.value)}
                    placeholder="Orçamento Inicial"
                    type="number"
                    required
                    className="form_input p-1 rounded-xl"
                  />
                  <span className="font-normal">Convidados Previstos</span>
                  <input
                    value={convidadosPrevistos}
                    onChange={(e) => setConvidadosPrevistos(e.target.value)}
                    placeholder="Número de Convidados"
                    type="number"
                    className="form_input p-1 rounded-xl"
                  />
                  <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                      href={"/"}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-red-500 hover:text-white"
                    >
                      Cancelar
                    </Link>

                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => editarEvento("Sociais")}
                      className="px-5 py-1.5 text-sm rounded-full text-black hover:bg-blue-500 hover:text-white"
                    >
                      Editar
                    </button>
                  </div>
                </>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormEdit;
