import { connectToDB } from "../../../../../../utils/database";
import RoadMap from "../../../../../../models/roadMap";
import { ObjectId } from "mongodb";

// Configurações dinâmicas para desativar cache (Next.js 14+)
export const dynamic = 'force-dynamic'; // ✅ Garante que a rota seja sempre dinâmica
export const revalidate = 0; // ✅ Equivalente a 'no-store'

export const PUT = async (req, { params }) => {
  try {
    const updateData = await req.json(); // Recebe os dados a atualizar
    const { id } = params; // Captura o ID da URL corretamente no Next.js

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), {
        status: 400,
      });
    }

    await connectToDB(); // Conecta ao banco de dados

    const updatedEvento = await RoadMap.findByIdAndUpdate(
      id,
      { $set: updateData }, // Atualiza apenas os campos recebidos
      { new: true, runValidators: true } // Retorna o documento atualizado e valida os campos
    );

    if (!updatedEvento) {
      return new Response(
        JSON.stringify({ message: "Evento não encontrado" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(updatedEvento), {
      status: 200,
      headers: {
        // Headers para evitar cache em todos os níveis:
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        // Opcional: Para APIs públicas (evita cache em CDNs/proxies)
        'CDN-Cache-Control': 'no-store',
        'Vercel-CDN-Cache-Control': 'no-store'
    }
    });
  } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    return new Response(
      JSON.stringify({
        message: "Erro ao atualizar evento",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};
