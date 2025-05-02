import { connectToDB } from "../../../../../utils/database";
import Mesas from "../../../../../models/mesas";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      nomeMesa,
  } = await req.json();

  try {
    await connectToDB();
    const newGroup = new Mesas({ 
        criadoPor,
        criadoPorEmail,
        nomeMesa,
    }); 

    await newGroup.save();
    return new Response(JSON.stringify(newGroup), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Mesa:", error);
    return new Response("Failed to create a new Mesa", { status: 500 });
  }
};