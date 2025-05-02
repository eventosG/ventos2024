import { connectToDB } from "../../../../../utils/database";
import RoadMap from "../../../../../models/roadMap";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      roadMapTitle,
      roadMapText,
      tipoEvento,
  } = await req.json();

  try {
    await connectToDB();
    const newRoadMap = new RoadMap({ 
      criadoPor,
      criadoPorEmail,
      roadMapTitle,
      roadMapText,
      tipoEvento,
    }); 
    await newRoadMap.save();
    return new Response(JSON.stringify(newRoadMap), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new RoadMap:", error);
    return new Response("Failed to create a new RoadMap", { status: 500 });
  }
};