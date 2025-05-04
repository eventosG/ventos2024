import mongooseConnect from "../../../../lib/mongoose";
import { Category } from "../../../../models/Category";

// Configurações dinâmicas para desativar cache (Next.js 14+)
export const dynamic = 'force-dynamic'; // ✅ Garante que a rota seja sempre dinâmica
export const revalidate = 0; // ✅ Equivalente a 'no-store'

export const GET = async () => {
  try {
    await mongooseConnect();
    const eventos = await Category.find().populate("parent");
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
    return new Response("Error", {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
};
