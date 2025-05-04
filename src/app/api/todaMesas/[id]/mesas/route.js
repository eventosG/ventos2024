import Mesa from "../../../../../../models/mesa";
import { connectToDB } from "../../../../../../utils/database";

// Configurações dinâmicas para desativar cache (Next.js 14+)
export const dynamic = 'force-dynamic'; // ✅ Garante que a rota seja sempre dinâmica
export const revalidate = 0; // ✅ Equivalente a 'no-store'

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    console.log(params.id);

    const prompts = await Mesa.find({ creator: params.id }).populate("creator");
    console.log(prompts);
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
