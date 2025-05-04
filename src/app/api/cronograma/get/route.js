import { connectToDB } from "../../../../../utils/database";
import Cronograma from "../../../../../models/cronograma";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Cronograma.find();
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
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
};
