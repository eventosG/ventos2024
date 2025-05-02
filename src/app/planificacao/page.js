"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { useUser } from "@clerk/nextjs";
import FormComponent from "../components/formRoadMap/FormComponent";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaTable } from "react-icons/fa6";

import "./aqui.css";
ChartJS.register(ArcElement, Tooltip, Legend);
const listServicos = [
  { servico: "Transporte", preco: "3.000.00", cor: "rgb(255, 99, 132)" },
  { servico: "Garçom", preco: "3.000.00", cor: "rgb(54, 162, 235)" },
  {
    servico: "Fotografia e Vídeo",
    preco: "3.000.00",
    cor: "rgb(255, 206, 86)",
  },
  {
    servico: "Catering e Rodízio",
    preco: "3.000.00",
    cor: "rgb(75, 192, 192)",
  },
  { servico: "Doces e Salgados", preco: "2.915.00", cor: "rgb(153, 102, 255)" },
  { servico: "Sobremesas", preco: "3.000.00", cor: "rgb(255, 159, 64)" },
  {
    servico: "Telas e Projectores",
    preco: "3.000.00",
    cor: "rgb(199, 199, 199)",
  },
];
const listServicos2 = [
  {
    servico: "Mestre de Ceremónia",
    preco: "3.000.00",
    cor: "rgb(83, 102, 255)",
  },
  {
    servico: "Local de Celebração",
    preco: "3.000.00",
    cor: "rgb(255, 102, 255)",
  },
  {
    servico: "Líquidos e Cocktails",
    preco: "3.000.00",
    cor: "rgb(102, 255, 204)",
  },
  { servico: "Brindes", preco: "3.000.00", cor: "rgb(255, 204, 102)" },
  {
    servico: "Iluminação e Palco Luminoso",
    preco: "3.000.00",
    cor: "rgb(0, 204, 102)",
  },
  {
    servico: "Decoração e Cenário",
    preco: "3.000.00",
    cor: "rgb(255, 102, 102)",
  },
  { servico: "Lua-de-Mel", preco: "3.000.00", cor: "rgb(102, 153, 255)" },
];
const listServicos3 = [
  { servico: "DJ e Som", preco: "3.000.00", cor: "rgb(204, 255, 102)" },
  { servico: "Protocolo", preco: "3.000.00", cor: "rgb(255, 153, 204)" },
  {
    servico: "Fumo e Fogo de Artifício",
    preco: "3.000.00",
    cor: "rgb(102, 255, 102)",
  },
  {
    servico: "Diversão Infantil",
    preco: "3.000.00",
    cor: "rgb(204, 102, 255)",
  },
  { servico: "Sombra e Truss", preco: "3.000.00", cor: "rgb(255, 255, 102)" },
  { servico: "Vestuário", preco: "3.000.00", cor: "rgb(0, 153, 255)" },
  {
    servico: "Música e Manifestações Culturais",
    preco: "3.000.00",
    cor: "rgb(153, 255, 204)",
  },
];
const listServicos4 = [
  { servico: "Cabelo e MakeUp", preco: "3.000.00", cor: "rgb(255, 153, 153)" },
  {
    servico: "Joias e Bijuterias",
    preco: "3.000.00",
    cor: "rgb(204, 255, 255)",
  },
  { servico: "Buquê e Flores", preco: "3.000.00", cor: "rgb(255, 204, 229)" },
  {
    servico: "Escolta e Cortesia",
    preco: "3.000.00",
    cor: "rgb(255, 229, 204)",
  },
  { servico: "Streaming", preco: "3.000.00", cor: "rgb(229, 204, 255)" },
  { servico: "Convites", preco: "3.000.00", cor: "rgb(204, 229, 255)" },
  { servico: "Wellcome Drink", preco: "3.000.00", cor: "rgb(255, 255, 255)" },
];
let data2 = [];
let listaServicosVolatel = [];
export default function Planificacao() {
  const [submitting, setSubmitting] = useState(false);
  const [tipoEventoSelected, settipoEventoSelected] = useState("");
  const [roadMapTitle, setRoadMapTitle] = useState("");
  const [roadMapText, setRoadMapText] = useState("");
  const [roadMapUpDate, setRoadMapUpDate] = useState("");
  const [listaEvento, setListaEvento] = useState([]);
  const [listaServiçosSelcion, setListaServiçosSelcion] = useState([]);
  const [listaRoadMap, setListaRoadMap] = useState([]);
  const [actualizar, setActualizar] = useState("");
  const [listaServicosSelected, setListaServicosSelected] = useState([]);
  const [orcamentoDisponivel, setOrcamentoDisponivel] = useState(0);
  const [totalMinimo, setTotalMinimo] = useState(0);
  const [totalOrcamento, setTotalOrcamento] = useState(0);
  const [totalSeleccionado, setTotalSeleccionado] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedTransporte, setIsSelectedTransporte] = useState(false);
  const [isSelectedLiquidos, setIsSelectedLiquidos] = useState(false);
  const [isSelectedIluminacao, setIsSelectedIluminacao] = useState(false);
  const [isSelectedFogoArtificio, setIsSelectedFogoArtificio] = useState(false);
  const [isSelectedSombra, setIsSelectedSombra] = useState(false);
  const [isSelectedVestuario, setIsSelectedVestuario] = useState(false);
  const [isSelectedCabeloMakeup, setIsSelectedCabeloMakeup] = useState(false);
  const [isSelectedStreaming, setIsSelectedStreaming] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [iDSelected, setIDSelected] = useState("");
  const [totalServicoSelect, setTotalServicoSelect] = useState(0);
  const [nomeServicoVolatel, setNomeServicoVolatel] = useState("");
  const [isSelectedEscoltaCortesia, setIsSelectedEscoltaCortesia] =
    useState(false);
  const [isSelectedJoiasBijoterias, setIsSelectedJoiasBijoterias] =
    useState(false);
  const [isSelectedMusicaCultural, setIsSelectedMusicaCultural] =
    useState(false);
  const [isSelectedDiversaoInfantil, setIsSelectedDiversaoInfantil] =
    useState(false);
  const [isSelectedLocalSelecbracao, setIsSelectedLocalSelecbracao] =
    useState(false);
  const { user } = useUser();
  let listaEventosVolatel = [];
  let listaProdutosSelecionadosVolatel = [];
  let listaRoadMapVolatel = [];
  let somaVolatel = 0;
  let totMinimo = 0;
  let totSeleccionado = 0;

  function clickItem(item) {
    if (item === "Transporte") {
      setIsSelectedTransporte((prev) => !prev);
    } else if (item === "Líquidos e Cocktails") {
      setIsSelectedLiquidos((prev) => !prev);
    } else if (item === "Local de Celebração") {
      setIsSelectedLocalSelecbracao((prev) => !prev);
    } else if (item === "Iluminação e Palco Luminoso") {
      setIsSelectedIluminacao((prev) => !prev);
    } else if (item === "Fumo e Fogo de Artifício") {
      setIsSelectedFogoArtificio((prev) => !prev);
    } else if (item === "Diversão Infantil") {
      setIsSelectedDiversaoInfantil((prev) => !prev);
    } else if (item === "Sombra e Truss") {
      setIsSelectedSombra((prev) => !prev);
    } else if (item === "Vestuário") {
      setIsSelectedVestuario((prev) => !prev);
    } else if (item === "Música e Manifestações Culturais") {
      setIsSelectedMusicaCultural((prev) => !prev);
    } else if (item === "Cabelo e MakeUp") {
      setIsSelectedCabeloMakeup((prev) => !prev);
    } else if (item === "Joias e Bijuterias") {
      setIsSelectedJoiasBijoterias((prev) => !prev);
    } else if (item === "Escolta e Cortesia") {
      setIsSelectedEscoltaCortesia((prev) => !prev);
    } else if (item === "Streaming") {
      setIsSelectedStreaming((prev) => !prev);
    } else {
      setIsSelectedLocalSelecbracao(false);
      setIsSelectedLiquidos(false);
      setIsSelectedTransporte(false);
      setIsSelectedIluminacao(false);
      setIsSelectedFogoArtificio(false);
      setIsSelectedDiversaoInfantil(false);
      setIsSelectedSombra(false);
      setIsSelectedVestuario(false);
      setIsSelectedMusicaCultural(false);
      setIsSelectedCabeloMakeup(false);
      setIsSelectedJoiasBijoterias(false);
      setIsSelectedEscoltaCortesia(false);
      setIsSelectedStreaming(false);
    }
  }
  useEffect(() => {
    if (nomeServicoVolatel === "Noivos") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "7500",
          descricao: "Mercedes Benz",
          cor: "rgb(255, 99, 132)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Acompanhantes e Convidados") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "8500",
          cor: "rgb(255, 99, 32)",
          descricao: "Toyota Minibus",
        },
      ]);
    }
    if (nomeServicoVolatel === "Garçom") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "950",
          cor: "rgb(54, 162, 235)",
          descricao: "950 mtn/cada",
        },
      ]);
    }
    if (nomeServicoVolatel === "Fotografia e Vídeo") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "3500",
          cor: "rgb(255, 206, 86)",
          descricao:
            "Pacote A (10 fotografias | 1 video normal flash de 1 min)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Catering e Rodízio") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "850",
          cor: "rgb(75, 192, 192)",
          descricao: "Catering (Saladas Frias | Grelhados)/Pessoa",
        },
      ]);
    }
    if (nomeServicoVolatel === "Doces e Salgados") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "2915",
          descricao:
            "Doces (Biscoitos: 175 mtn/dúzia | Gulabos: 240 mtn/dúzia | Bolo: 2500 mtn) Salgados (Chamussas: 170 mtn/dúzia | Rissóis: 340 mtn/dúzia)",
          cor: "rgb(153, 102, 255)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Sobremesas") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "1500",
          descricao:
            "Saladas de frutas: 250 mtn/pessoa | Iogurtes naturais: 150 mtn/pessoa",
          cor: "rgb(255, 159, 64)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Telas e Projectores") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "5500",
          descricao: "55 polegadas: 1600 mtn/dia",
          cor: "rgb(199, 199, 199)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Mestre de Ceremónia") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          preco: "7500",
          descricao: "Aristides Bonzo: 3500 Mtn/dia",
          cor: "rgb(83, 102, 255)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Local de Celebração (Casa)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 102, 255)",
          preco: "0",
          descricao: "",
        },
      ]);
    }
    if (nomeServicoVolatel === "Local de Celebração (Salão)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 102, 255)",
          preco: "35000",
          descricao: "",
        },
      ]);
    }
    if (nomeServicoVolatel === "Local de Celebração (Praia)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 102, 255)",
          preco: "70000",
          descricao: "",
        },
      ]);
    }
    if (nomeServicoVolatel === "Local de Celebração (Quintas)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 102, 255)",
          preco: "8000",
          descricao: "",
        },
      ]);
    }
    if (nomeServicoVolatel === "Líquidos e Cocktails (Água)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 204)",
          preco: "1500",
          descricao:
            "0.5L: 350 mtn/caixa (24 garrafas) | 1.5L: 470 mtn/caixa (12 garrafas)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Líquidos e Cocktails (Refrigerantes)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 204)",
          preco: "2500",
          descricao:
            "750 ml: 350mtn/caixa (24 garrafas) | 2L: 350 mtn/caixa (6 garrafas)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Líquidos e Cocktails (Sumos)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 204)",
          preco: "5000",
          descricao:
            "0.5lL: 380 mtn/caixa (24 pacotes) | 1L: 840 mtn/caixa (6 pacotes)",
        },
      ]);
    }
    if (nomeServicoVolatel === "Líquidos e Cocktails (Bebidas Alcoólicas)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 204)",
          preco: "10000",
          descricao: "Com álcool: 350 mtn/dúzia | Sem álcool: 270 mtn/dúzia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Líquidos e Cocktails (Cocktails)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 204)",
          preco: "8000",
          descricao: "",
        },
      ]);
    }
    if (nomeServicoVolatel === "Iluminação e Palco Luminoso (Iluminação)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 204, 102)",
          preco: "9500",
          descricao: "A partir de 9500 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Iluminação e Palco Luminoso (Palco Luminoso)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 204, 102)",
          preco: "13500",
          descricao: "A partir de 13500 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Fumo e Fogo de Artifício (Efeito Nuvem)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 102)",
          preco: "9700",
          descricao: "A partir de 9700mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Fumo e Fogo de Artifício (Fogo Frio)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 102)",
          preco: "8750",
          descricao: "A partir de 8750mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Fumo e Fogo de Artifício (Fumaça)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 102)",
          preco: "3500",
          descricao: "A partir de 3500mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Fumo e Fogo de Artifício (Fogo de Artificio)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(102, 255, 102)",
          preco: "4500",
          descricao: "A partir de 4500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Diversão Infantil (Pula-Pula)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 102, 255)",
          preco: "2750",
          descricao: "A partir de 2750 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Diversão Infantil (Baloiço)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 102, 255)",
          preco: "1250",
          descricao: "A partir de 1250 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Diversão Infantil (Palhaços)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 102, 255)",
          preco: "1200",
          descricao: "1200 mtn/cada",
        },
      ]);
    }
    if (nomeServicoVolatel === "Sombra e Truss (Tendas)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 255, 102)",
          preco: "1200",
          descricao: "A partir de 13000mt/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Sombra e Truss (Lycras)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 255, 102)",
          preco: "250",
          descricao: "A partir de 250/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Sombra e Truss (Truss)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 255, 102)",
          preco: "8500",
          descricao:
            "Metálica: A partir de 8500 mtn/dia | Madeira: A partir de 10500mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Vestuário (Noiva)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 153, 255)",
          preco: "3500",
          descricao:
            "Vestido Aluguer: A partir de 3500 mtn/dia | Vestido Compra): A partir de 25000 mtn | Estilista: A partir de 50000 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Vestuário (Noivo)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 153, 255)",
          preco: "3500",
          descricao:
            "Compra Fato: A partir 3500mtn | Estilista Fato): A partir de 14000 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Vestuário (Damas)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 153, 255)",
          preco: "1700",
          descricao:
            "Vestido/Saia Compra: 1700 mtn | Vestido/Saia Estilista: A partir de 2500 mtn | Calçado: A partir de 750 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Vestuário (Cavalheiros)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(0, 153, 255)",
          preco: "3500",
          descricao:
            "Túnica (Estilista): A partir de 500 mtn | Fato (Compra): A partir de 3500 mtn | Fato (Estilista): A partir de 6500 mtn",
        },
      ]);
    }
    if (
      nomeServicoVolatel ===
      "Música e Manifestações Culturais (Serenatas e Poesia)"
    ) {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(153, 255, 204)",
          preco: "3500",
          descricao: "A partir de 3500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Música e Manifestações Culturais (Banda)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(153, 255, 204)",
          preco: "7000",
          descricao: "A partir de 7000 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Música e Manifestações Culturais (Artista)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(153, 255, 204)",
          preco: "15000",
          descricao: "A partir de 15000 mtn",
        },
      ]);
    }
    if (
      nomeServicoVolatel ===
      "Música e Manifestações Culturais (Dança Tradicional)"
    ) {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(153, 255, 204)",
          preco: "4500",
          descricao: "A partir de 4500 mtn",
        },
      ]);
    }
    if (
      nomeServicoVolatel === "Música e Manifestações Culturais (Dança Moderna)"
    ) {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(153, 255, 204)",
          preco: "3500",
          descricao: "A partir de 3500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "DJ e Som") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 102)",
          preco: "12000",
          descricao: "Dj: 3500 mtn/dia | Som: a partir de 7500 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Protocolo") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 153, 204)",
          preco: "850",
          descricao: "850 mtn/dia",
        },
      ]);
    }
    if (nomeServicoVolatel === "Cabelo e MakeUp (Noivo)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 153, 153)",
          preco: "150",
          descricao: "A partir de 150 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Cabelo e MakeUp (Noiva)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 153, 153)",
          preco: "1500",
          descricao: "A partir de 1500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Cabelo e MakeUp (Aniversariante)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 153, 153)",
          preco: "250",
          descricao: "A partir de 250 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Alianças)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "1500",
          descricao: "A partir de 1500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Brincos)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "550",
          descricao: "A partir de 550 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Colares)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "950",
          descricao: "A partir de 950 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Tiaras)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "350",
          descricao: "A partir de 350 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Mascote)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "650",
          descricao: "A partir de 650 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Joias e Bijuterias (Relógios)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 255, 255)",
          preco: "1500",
          descricao: "A partir de 1500 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Escolta e Cortesia (Motorizadas)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 229, 204)",
          preco: "15300",
          descricao: "A partir de 15300 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Escolta e Cortesia (Caros)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 229, 204)",
          preco: "11000",
          descricao: "A partir de 11000 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Streaming (Interativo)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(229, 204, 255)",
          preco: "4500",
          descricao:
            "2 câmeras: 1500 mtn/hora | 3 câmeras: 2250 mtn/hora | 4 câmeras: 3000 mtn/hora",
        },
      ]);
    }
    if (nomeServicoVolatel === "Streaming (Não interativo)") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(229, 204, 255)",
          preco: "3200",
          descricao:
            "2 câmeras: 1100 mtn/hora | 3 câmeras: 1750 mtn/hora | 4 câmeras: 2400 mtn/hora",
        },
      ]);
    }
    if (nomeServicoVolatel === "Buquê e Flores") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 204, 229)",
          preco: "1400",
          descricao:
            "Artificial: A partir de 1400 mtn | Natural: A partir de 1600 mtn",
        },
      ]);
    }
    if (nomeServicoVolatel === "Convites") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(204, 229, 255)",
          preco: "210",
          descricao:
            "Cartao PVC: 250 mtn/unidade | Cartolina: 150 mtn/unidade | Papel: 90 mtn/ unidade",
        },
      ]);
    }
    if (nomeServicoVolatel === "Wellcome Drink") {
      listaServicosVolatel.push([
        {
          servico: nomeServicoVolatel,
          cor: "rgb(255, 255, 255)",
          preco: "7500",
          descricao: "A partir de 7500 mtn",
        },
      ]);
    }

    setListaServicosSelected(listaServicosVolatel);
  }, [nomeServicoVolatel, listaServicosSelected]);
  useEffect(() => {
    settipoEventoSelected(localStorage.getItem("tipoEvento"));
  }, []);
  useEffect(() => {
    data2 = {
      labels: listaServiçosSelcion.map((servico) => servico.nomeServico),
      datasets: [
        {
          label: "Preço",
          data: listaServiçosSelcion.map((servico) =>
            parseFloat(servico.preco)
          ),
          backgroundColor: listaServiçosSelcion.map((servico) => servico.cor),
          hoverOffset: 4,
        },
      ],
    };
  }, [listaServiçosSelcion]);
  useEffect(() => {
    listaServiçosSelcion.map((item) => {
      totMinimo += parseFloat(item.preco);
      if (item.preco2 === "") {
      } else {
        totSeleccionado += parseFloat(item.preco2);
      }
    });
    setTotalMinimo(totMinimo);
    setTotalSeleccionado(totSeleccionado);
    setTotalOrcamento(totSeleccionado + totMinimo);
  }, [listaServiçosSelcion]);
  useEffect(() => {
    fetch("api/servicosSelecionados/get") // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        listaProdutosSelecionadosVolatel = [];
        somaVolatel = 0;
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            listaProdutosSelecionadosVolatel.push(evento);
            somaVolatel += parseFloat(evento.preco);
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaServiçosSelcion(listaProdutosSelecionadosVolatel);
        setTotalServicoSelect(somaVolatel.toLocaleString("pt-BR"));
      });
  }, [user?.fullName, user?.primaryEmailAddress?.emailAddress, actualizar]);
  useEffect(() => {
    fetch("api/eventos/get") // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        listaEventosVolatel = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            if (evento.tipoEvento === tipoEventoSelected) {
              listaEventosVolatel.push(evento);
              const number = parseFloat(evento.orcamentoInicial);
              setOrcamentoDisponivel(number);
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaEvento(listaEventosVolatel);
      });

    fetch("api/roadMap/get") // Rota de API local em Next.js
      .then((res) => res.json())
      .then((data) => {
        listaRoadMapVolatel = [];
        data.map((evento) => {
          if (
            evento.criadoPor === user?.fullName ||
            evento.criadoPorEmail === user?.primaryEmailAddress?.emailAddress
          ) {
            if (evento.tipoEvento === tipoEventoSelected) {
              listaRoadMapVolatel.push(evento);
            }
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      })
      .finally(() => {
        setListaRoadMap(listaRoadMapVolatel);
      });
  }, [
    user?.fullName,
    user?.primaryEmailAddress?.emailAddress,
    tipoEventoSelected,
    roadMapUpDate,
  ]);
  const createRoadMap = async (tipoEv) => {
    setShowForm(false);
    setRoadMapUpDate("hgd");
    toast.info(`Adicionando Item ao Road Map!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      const response = await fetch("api/roadMap/new", {
        method: "POST",
        body: JSON.stringify({
          criadoPor: user.fullName,
          criadoPorEmail: user.primaryEmailAddress?.emailAddress,
          roadMapTitle,
          roadMapText,
          tipoEvento: tipoEventoSelected,
        }),
      });
      if (response.status === 201 || response.status === 200) {
        setRoadMapUpDate("kkkgg");
        toast.success(`Novo Item adicionado ao Road Map com sucesso...`, {
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
    } finally {
      setRoadMapTitle("");
      setRoadMapText("");
      setRoadMapUpDate("sds");
    }
  };
  const editRoadMapDB = async () => {
    setShowForm(false);
    setRoadMapUpDate("hgd");
    toast.info(`Editando o Road Map!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      const response = await fetch(`api/roadMap/edit/${iDSelected}`, {
        method: "PUT",
        body: JSON.stringify({
          criadoPor: user.fullName,
          criadoPorEmail: user.primaryEmailAddress?.emailAddress,
          roadMapTitle,
          roadMapText,
          tipoEvento: tipoEventoSelected,
        }),
      });
      if (response.status === 201 || response.status === 200) {
        setRoadMapUpDate("kkkgg");
        toast.success(`Road Map editado com sucesso...`, {
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
      setRoadMapTitle("");
      setRoadMapText("");
      setRoadMapUpDate("sds");
    }
  };
  const editRoadMap = async (id) => {
    listaRoadMap.map((item) => {
      if (item._id === id) {
        setRoadMapTitle(item.roadMapTitle);
        setRoadMapText(item.roadMapText);
        setShowForm(true);
        setIsEdit(true);
        setIDSelected(item._id);
      }
    });
  };
  function deleteRoadMap(id) {
    setIDSelected(id);
    listaRoadMap.map((item) => {
      if (item._id === id) {
        setIDSelected(item._id);
        handleDelete();
      }
    });
  }
  const handleDelete = async () => {
    setRoadMapUpDate("a9");
    if (
      !confirm(
        `Tem certeza que deseja remover este item do Raod Map? ${iDSelected}`
      )
    )
      return;

    try {
      const res = await fetch(`/api/roadMap/delete/${iDSelected}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRoadMapUpDate("a10");
        alert("Road Map removido com sucesso!");
        router.refresh(); // Atualiza a página sem recarregar completamente
      } else {
        const data = await res.json();
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao remover Road Map:", error);
    }
  };
  const createServicoSelecionado = async () => {
    setSubmitting(true);
    setActualizar("asaaf");
    try {
      if (listaServicosSelected.length > 0) {
        toast.info(`🦄 Guardando os serviços slecionados!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        listaServicosSelected.map(async (item) => {
          item.map(async (produto) => {
            const response = await fetch("api/servicosSelecionados/new", {
              method: "POST",
              body: JSON.stringify({
                criadoPor: user.fullName,
                criadoPorEmail: user.primaryEmailAddress?.emailAddress,
                nomeServico: produto.servico,
                preco: produto.preco,
                nomeServico2: "",
                preco2: "",
                cor: produto.cor,
                descricao: produto.descricao,
              }),
            });
          });
        });
      } else {
        setSubmitting(false);
        setActualizar("dssa");
        toast.error(`🦄 Nenhum serviço seleccionado!`, {
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
      // toast.success(`Serviço(s) Adicionado(s) com Sucesso!`, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      setSubmitting(false);
      setActualizar("dadas");
      // router.push("/planificacao");
    }
  };
  const handleDeleteServico = async (id) => {
    setActualizar("a9");
    if (!confirm(`Tem certeza que deseja remover este serviço?`)) return;

    try {
      const res = await fetch(`/api/servicosSelecionados/delete/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setActualizar("a10");
        alert("Serviço removido com sucesso!");
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
      <div className="grid grid-cols-1 lg:grid-cols-6">
        {/* <div className="flex flex-col col-span-1">
          <div className="h-screen block rounded-lg bg-white my-4 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            {isClicked ? (
              <>
                <p
                  className="font-bold text-center mb-4"
                  onClick={() => setIsSelected((prev) => !prev)}
                >
                  Serviços Seleccionados
                </p>
              </>
            ) : (
              <p className="font-bold text-center mb-4">Planificação</p>
            )}
          </div>
        </div> */}
        <div className="block col-span-5 w-full">
          {isClicked ? (
            <>
              <button
                type="button"
                onClick={() => setIsClicked((prev) => !prev)}
                className="m-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <span className="flex flex-row justify-center items-center gap-2 text-[10px]">
                  <FaArrowLeft />
                  Voltar
                </span>
              </button>
              <button
                type="button"
                onClick={() => setIsSelected((prev) => !prev)}
                className="m-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                {isSelected ? (
                  <span className="flex flex-row justify-center items-center gap-2 text-[10px]">
                    <BsGraphUpArrow /> Gráfico
                  </span>
                ) : (
                  <span className="flex flex-row justify-center items-center gap-2 text-[10px]">
                    <FaTable />
                    Tabela
                  </span>
                )}
              </button>
              {isSelected ? (
                <>
                  <div className="text-center mt-4 underline mb-4">
                    ORÇAMENTAÇÃO
                  </div>
                  <div className="flex flex-row justify-center mx-8 gap-28 mb-4">
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-60">
                      {" "}
                      <div className="flex flex-col text-center font-bold">
                        <small>Disponivel</small>
                        <small>
                          {orcamentoDisponivel.toLocaleString("pt-BR")},00 MZN
                        </small>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-60">
                      {" "}
                      <div className="flex flex-col text-center font-bold">
                        <small>Remanescente</small>
                        <small>
                          {(
                            orcamentoDisponivel - totalOrcamento
                          ).toLocaleString("pt-BR")}
                          ,00 MZN
                        </small>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-4" />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="m-4 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Imprimir
                    </button>
                    <button
                      type="button"
                      className="m-4 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Download
                    </button>
                  </div>
                  <hr className="mx-4" />

                  <div className="m-4">
                    <div className="flex flex-col">
                      <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                          <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                <tr>
                                  <th scope="col" className=" pl-4 py-2">
                                    <div className="text-left">
                                      <p>Serviço Seleccionado</p>
                                    </div>
                                  </th>
                                  <th scope="col" className=" px-2 py-2">
                                    <div className="text-right">
                                      <p>Código</p>
                                    </div>
                                  </th>
                                  <th scope="col" className=" px-2 py-2">
                                    <div className="text-right">
                                      <p>Preço Mínimo</p>
                                    </div>
                                  </th>

                                  <th scope="col" className=" px-2 py-2">
                                    <div className="text-right">
                                      <p>Preço Seleccionado</p>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {listaServiçosSelcion.length > 0 ? (
                                  <>
                                    {listaServiçosSelcion.map((item) => (
                                      <>
                                        <tr className="border-b dark:border-neutral-500">
                                          <td className="whitespace-nowrap  pl-4 py-4 font-medium">
                                            <div className="text-left">
                                              <p>{item.nomeServico}</p>
                                            </div>
                                          </td>
                                          <td className="whitespace-nowrap  px-2 py-4">
                                            <div className="text-right">
                                              <p
                                                className="cursor-pointer"
                                                title="Clicar para ver"
                                              >
                                                GE-{item._id}
                                              </p>
                                            </div>
                                          </td>
                                          <td className="whitespace-nowrap  px-2 py-4">
                                            <div className="text-right">
                                              <p className="text-green-500 ">
                                                {parseFloat(
                                                  item.preco
                                                ).toLocaleString("pt-BR")}
                                                ,00 MZN
                                              </p>
                                            </div>
                                          </td>

                                          <td className="whitespace-nowrap  px-2 py-4">
                                            <div className="text-right">
                                              <div
                                                className="flex flex-row justify-end cursor-pointer gap-4"
                                                title="Clicar para editar ou remover"
                                              >
                                                <p className="">
                                                  {item.preco2 === "" ? (
                                                    <>0,00 MZN</>
                                                  ) : (
                                                    <>
                                                      {parseFloat(
                                                        item.preco2
                                                      ).toLocaleString("pt-BR")}
                                                      ,00 MZN
                                                    </>
                                                  )}
                                                </p>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    ))}
                                  </>
                                ) : (
                                  <></>
                                )}

                                {/* Aquiiiiindfn */}
                                {/* <tr className="border-b dark:border-neutral-500 bg-green-300 mt-10">
                                  <td className="whitespace-nowrap  pl-4 py-1 font-medium">
                                    <div className="text-left">
                                      <p className="font-bold">
                                        Total dos Serviços Aprovados
                                      </p>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap  px-2 py-1">
                                    <div className="text-right">
                                      <p className="font-bold">20.000,00 MZN</p>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap  px-2 py-1">
                                    <div className="text-right">
                                      <p className="font-bold">75.400,00 MZN</p>
                                    </div>
                                  </td>
                                </tr> */}
                                {/* <tr className="border-b dark:border-neutral-500 bg-blue-300">
                                  <td className="whitespace-nowrap  pl-4 py-1 font-medium">
                                    <div className="text-left">
                                      <p className="font-bold"></p>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap  px-2 py-1">
                                    <div className="text-right"></div>
                                  </td>
                                  <td className="whitespace-nowrap  px-2 py-1">
                                    <div className="text-right"></div>
                                  </td>
                                  <td className="whitespace-nowrap  px-2 py-1">
                                    <div className="flex justify-end">
                                      <div className="flex flex-row gap-4">
                                        <div>
                                          <p className="font-bold">
                                            Total Global:
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-bold">
                                            95.400,00 MZN
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-96">
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                  <tr>
                                    <th scope="col" className="px-6 py-2">
                                      Subtotal dos Serviços Aprovados
                                    </th>
                                    <th scope="col" className="px-6 py-2">
                                      .
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                                      Minimos
                                    </td>
                                    <td className="whitespace-nowrap py-2">
                                      <div className="flex justify-end">
                                        <p>
                                          {totalMinimo.toLocaleString("pt-BR")}
                                          ,00 MZN
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                                      Seleccionados
                                    </td>
                                    <td className="whitespace-nowrap py-2">
                                      <div className="flex justify-end">
                                        <p>
                                          {totalSeleccionado.toLocaleString(
                                            "pt-BR"
                                          )}
                                          ,00 MZN
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-28 mt-12">
                    <div>
                      <p className="font-bold text-xl">Total Global</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl">
                        <p>{totalOrcamento.toLocaleString("pt-BR")},00 MZN</p>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <button
                      type="button"
                      className="m-4 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Finalizar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-8 mb-12 md:mb-24 px-4">
                    {/* Título */}
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Distribuição de Custos
                      </h2>
                      <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
                    </div>

                    {/* Gráfico */}
                    <div className="flex justify-center">
                      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                        {listaServiçosSelcion.length > 0 ? (
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <Doughnut
                              data={data2}
                              options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                plugins: {
                                  legend: {
                                    position: "bottom",
                                    labels: {
                                      font: {
                                        size: 14,
                                      },
                                      padding: 20,
                                    },
                                  },
                                  tooltip: {
                                    enabled: true,
                                    callbacks: {
                                      label: function (context) {
                                        return `${context.label}: ${context.formattedValue} MZN`;
                                      },
                                    },
                                  },
                                },
                                cutout: "60%",
                                borderRadius: 4,
                                spacing: 8,
                              }}
                            />
                          </div>
                        ) : (
                          <div className="text-center py-8 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-500 dark:text-gray-400">
                              Nenhum serviço selecionado para exibir a
                              distribuição de custos
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 px-4">
                {/* Card Orçamento Disponível */}
                <div className="text-center w-full max-w-xs md:w-auto">
                  <div className="text-blue-600 font-bold text-lg mb-2">
                    Orçamento Disponível
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-neutral-700 w-full">
                    <div className="text-2xl font-bold text-blue-500">
                      {orcamentoDisponivel.toLocaleString("pt-BR")},00 MZN
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                      Valor total disponível
                    </div>
                  </div>
                </div>

                {/* Card Orçamento Real */}
                <div
                  className="text-center w-full max-w-xs md:w-auto cursor-pointer"
                  onClick={() => setIsClicked((prev) => !prev)}
                >
                  <div className="text-green-600 font-bold text-lg mb-2">
                    Orçamento Real
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-neutral-700 w-full">
                    <div className="text-2xl font-bold text-green-500">
                      {totalServicoSelect.toLocaleString("pt-BR")},00 MZN
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                      Clique para detalhes
                    </div>
                  </div>
                </div>

                {/* Card Momentos do Evento */}
                <div className="text-center w-full max-w-xs md:w-auto">
                  <div className="font-bold text-lg mb-2 text-purple-600">
                    Momentos do Evento
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-neutral-700 w-full">
                    <div className="text-2xl text-purple-500">...</div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                      Em breve mais informações
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12 underline mb-4">
                SELECÇÃO DE SERVIÇOS
              </div>
              {/* <button
                type="button"
                className="ml-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Seleccionar Tudo
              </button> */}

              {listaServiçosSelcion.length > 0 ? (
                <>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-lg shadow-md">
                          <table className="min-w-full text-left text-sm font-light">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 font-medium text-white">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-4 py-3 sm:px-6 sm:py-4 w-12"
                                >
                                  #
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 sm:px-6 sm:py-4"
                                >
                                  Nome do Serviço
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 sm:px-6 sm:py-4"
                                >
                                  Preço
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 sm:px-6 sm:py-4 w-12"
                                >
                                  Ações
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {listaServiçosSelcion.map((item, index) => (
                                <tr
                                  key={item._id}
                                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-50 dark:border-neutral-500 dark:hover:bg-neutral-700"
                                >
                                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 font-medium">
                                    {index + 1}
                                  </td>
                                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                                    <div className="font-medium text-neutral-800 dark:text-neutral-200">
                                      {item.nomeServico}
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 font-medium text-green-600">
                                    {item.preco.toLocaleString("pt-BR")},00 MZN
                                  </td>
                                  <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4">
                                    <button
                                      onClick={() =>
                                        handleDeleteServico(item._id)
                                      }
                                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                      aria-label="Remover serviço"
                                    >
                                      <FaRegTrashAlt className="h-5 w-5" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          {/* Mensagem quando a tabela está vazia */}
                          {listaServiçosSelcion.length === 0 && (
                            <div className="bg-white py-8 text-center dark:bg-neutral-800">
                              <div className="text-neutral-500 dark:text-neutral-400">
                                Nenhum serviço selecionado
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-0 mt-4 justify-center">
                    {/* Coluna 1 */}
                    <div className="mt-4 w-full md:w-auto">
                      <div className="space-y-3">
                        {listServicos.map((item) => (
                          <ServiceCheckbox
                            key={item.servico}
                            item={item}
                            isSelectedTransporte={isSelectedTransporte}
                            clickItem={clickItem}
                            setNomeServicoVolatel={setNomeServicoVolatel}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Coluna 2 */}
                    <div className="mt-4 w-full md:w-auto">
                      <div className="space-y-3">
                        {listServicos2.map((item) => (
                          <ServiceCheckbox
                            key={item.servico}
                            item={item}
                            isSelectedLocalSelecbracao={
                              isSelectedLocalSelecbracao
                            }
                            isSelectedLiquidos={isSelectedLiquidos}
                            isSelectedIluminacao={isSelectedIluminacao}
                            clickItem={clickItem}
                            setNomeServicoVolatel={setNomeServicoVolatel}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Coluna 3 */}
                    <div className="mt-4 w-full md:w-auto">
                      <div className="space-y-3">
                        {listServicos3.map((item) => (
                          <ServiceCheckbox
                            key={item.servico}
                            item={item}
                            isSelectedFogoArtificio={isSelectedFogoArtificio}
                            isSelectedDiversaoInfantil={
                              isSelectedDiversaoInfantil
                            }
                            isSelectedSombra={isSelectedSombra}
                            clickItem={clickItem}
                            setNomeServicoVolatel={setNomeServicoVolatel}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Coluna 4 */}
                    <div className="mt-4 w-full md:w-auto">
                      <div className="space-y-3">
                        {listServicos4.map((item) => (
                          <ServiceCheckbox
                            key={item.servico}
                            item={item}
                            isSelectedVestuario={isSelectedVestuario}
                            isSelectedMusicaCultural={isSelectedMusicaCultural}
                            isSelectedCabeloMakeup={isSelectedCabeloMakeup}
                            isSelectedJoiasBijoterias={
                              isSelectedJoiasBijoterias
                            }
                            isSelectedEscoltaCortesia={
                              isSelectedEscoltaCortesia
                            }
                            isSelectedStreaming={isSelectedStreaming}
                            clickItem={clickItem}
                            setNomeServicoVolatel={setNomeServicoVolatel}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mb-2 mt-8 md:mt-12">
                    {submitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processando...
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => createServicoSelecionado()}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Finalizar Seleção
                      </button>
                    )}
                  </div>
                </>
              )}

              <div className="m-4">
                <FormComponent
                  setRoadMapTitle={setRoadMapTitle}
                  setRoadMapText={setRoadMapText}
                  roadMapTitle={roadMapTitle}
                  roadMapText={roadMapText}
                  setShowForm={setShowForm}
                  showForm={showForm}
                  createRoadMap={createRoadMap}
                  setIsEdit={setIsEdit}
                  isEdit={isEdit}
                  editRoadMapDB={editRoadMapDB}
                />
                <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full">
                  <div className="flex justify-center">
                    <div className="timeline">
                      <div className="outer">
                        {listaRoadMap.length > 0 ? (
                          <>
                            {listaRoadMap.map((item) => (
                              <div className="card" key={item._id}>
                                <div className="info">
                                  <h3 className="title">{item.roadMapTitle}</h3>
                                  <p>{item.roadMapText}</p>
                                  <div className="flex flex-row justify-end mx-2 mt-2 gap-2">
                                    <div
                                      onClick={() => editRoadMap(item._id)}
                                      className="cursor-pointer text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
                                    >
                                      <GrEdit />
                                    </div>
                                    <div
                                      onClick={() => deleteRoadMap(item._id)}
                                      className="cursor-pointer text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                                    >
                                      <RiDeleteBin6Line />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-12">
                <button
                  type="button"
                  className="ml-4 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-blue-200"
                >
                  Solicitar um Consultor
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
const ServiceCheckbox = ({ item, ...props }) => {
  const renderSubOptions = (servico) => {
    switch (servico) {
      case "Transporte":
        return (
          props.isSelectedTransporte && (
            <div className="ml-6 space-y-2 mt-1">
              <CheckboxOption
                label="Noivos"
                onClick={() => props.setNomeServicoVolatel("Noivos")}
              />
              <CheckboxOption
                label="Acompanhantes e Convidados"
                onClick={() =>
                  props.setNomeServicoVolatel("Acompanhantes e Convidados")
                }
              />
            </div>
          )
        );
      case "Local de Celebração":
        return (
          props.isSelectedLocalSelecbracao && (
            <div className="ml-6 space-y-2 mt-1">
              <CheckboxOption
                label="Casa"
                onClick={() =>
                  props.setNomeServicoVolatel("Local de Celebração (Casa)")
                }
              />
              <CheckboxOption
                label="Salão"
                onClick={() =>
                  props.setNomeServicoVolatel("Local de Celebração (Salão)")
                }
              />
              <CheckboxOption
                label="Praia"
                onClick={() =>
                  props.setNomeServicoVolatel("Local de Celebração (Praia)")
                }
              />
              <CheckboxOption
                label="Quintas"
                onClick={() =>
                  props.setNomeServicoVolatel("Local de Celebração (Quintas)")
                }
              />
            </div>
          )
        );
      // Adicione outros casos conforme necessário
      default:
        return null;
    }
  };

  return (
    <div key={item.servico}>
      <label className="flex items-start space-x-2 cursor-pointer group">
        <input
          type="checkbox"
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition"
          onClick={() =>
            item.servico === "Transporte" ||
            item.servico === "Local de Celebração"
              ? props.clickItem(item.servico)
              : props.setNomeServicoVolatel(item.servico)
          }
        />
        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
          {item.servico}
        </span>
      </label>
      {renderSubOptions(item.servico)}
    </div>
  );
};

const CheckboxOption = ({ label, onClick }) => (
  <label className="flex items-start space-x-2 cursor-pointer group">
    <input
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition"
      onClick={onClick}
    />
    <span className="text-gray-600 text-sm group-hover:text-blue-500 transition-colors">
      {label}
    </span>
  </label>
);
