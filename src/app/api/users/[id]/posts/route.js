import { connectToDB } from "../../../../../../utils/database";
import Evento from "../../../../../../models/evento";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const eventos = await Evento.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(eventos), {
      status: 200,
      headers: {
        // Headers para evitar cache em todos os níveis:
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
        // Opcional: Para APIs públicas (evita cache em CDNs/proxies)
        "CDN-Cache-Control": "no-store",
        "Vercel-CDN-Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
