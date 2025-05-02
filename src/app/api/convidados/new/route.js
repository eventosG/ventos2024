import { connectToDB } from "../../../../../utils/database";
import Convidados from "../../../../../models/convidados";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      nomeConvidado,
      grupos,
      mesas,
      participacao,
      momento2,
      status,
  } = await req.json();

  try {
    await connectToDB();
    const newGroup = new Convidados({ 
        criadoPor,
        criadoPorEmail,
        nomeConvidado,
        grupos,
        mesas,
        participacao,
        momento2,
        status,
    }); 

    await newGroup.save();
    return new Response(JSON.stringify(newGroup), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Convidado:", error);
    return new Response("Failed to create a new Convidado", { status: 500 });
  }
};