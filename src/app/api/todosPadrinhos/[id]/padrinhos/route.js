import Padrinho from "../../../../../../models/padrinho";
import { connectToDB } from "../../../../../../utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Padrinho.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), {
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
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
