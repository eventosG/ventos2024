import mongooseConnect from "../../../../lib/mongoose";
import { Product } from "../../../../models/Products";
export const GET = async () => {
  try {
    await mongooseConnect();
    const eventos = await Product.find();
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
