import { connectToDB } from "../../../../../utils/database";
import Grupos from "../../../../../models/grupos";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      nomeGrupo,
  } = await req.json();

  try {
    await connectToDB();
    const newGroup = new Grupos({ 
        criadoPor,
        criadoPorEmail,
        nomeGrupo,
    }); 

    await newGroup.save();
    return new Response(JSON.stringify(newGroup), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Grupo:", error);
    return new Response("Failed to create a new Grupo", { status: 500 });
  }
};