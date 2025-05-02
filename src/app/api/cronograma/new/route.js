import { connectToDB } from "../../../../../utils/database";
import Cronograma from "../../../../../models/cronograma";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      momento,
      descricao,
      interveniente,
      duracao,
  } = await req.json();

  try {
    await connectToDB();
    const newGroup = new Cronograma({ 
        criadoPor,
        criadoPorEmail,
        momento,
        descricao,
      interveniente,
      duracao,
    }); 

    await newGroup.save();
    return new Response(JSON.stringify(newGroup), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Cronograma:", error);
    return new Response("Failed to create a new Cronograma", { status: 500 });
  }
};