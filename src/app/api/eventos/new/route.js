import { connectToDB } from "../../../../../utils/database";
import Evento from "../../../../../models/evento";

export const POST = async (req, res) => {
  const {
    nomeNoiva,
    contactoNoiva,
    nomeNoivo,
    contactoNoivo,
    planificadorEvento,
    nomePlanificador,
    contactoPlanificador,
    localEvento,
    provincia,
    distrito,
    bairro,
    numeroCasaQuarteirao,
    pontoReferencia,
    dataEvento,
    temaEvento,
    orcamentoInicial,
    coresEvento,
    convidadosPrevistos,
    tipoEvento,
    tipodeBodas,
    criadoPor,
    criadoPorEmail,
    status,
  } = await req.json();

  try {
    await connectToDB();
    const newEvento = new Evento({ 
      criadoPor,
      criadoPorEmail,
      nomeNoiva,
      contactoNoiva, 
      nomeNoivo,
      contactoNoivo,
      planificadorEvento,
      nomePlanificador,
      contactoPlanificador,
      localEvento,
      provincia,
      distrito,
      bairro,
      numeroCasaQuarteirao,
      pontoReferencia,
      dataEvento,
      temaEvento,
      orcamentoInicial,
      coresEvento,
      convidadosPrevistos,
      tipoEvento,
      tipodeBodas,
      status,
    }); 

    await newEvento.save();
    return new Response(JSON.stringify(newEvento), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Evento:", error);
    return new Response("Failed to create a new Evento", { status: 500 });
  }
};