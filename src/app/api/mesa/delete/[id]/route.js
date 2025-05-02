import { connectToDB } from "../../../../../../utils/database";
import Mesas from "../../../../../../models/mesas";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), { status: 400 });
    }

    await connectToDB(); // Conecta ao banco de dados

    const deletedGroup = await Mesas.findByIdAndDelete(id);

    if (!deletedGroup) {
      return new Response(JSON.stringify({ message: "Mesa não encontrada" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Mesa removida com sucesso" }), { status: 200 });
  } catch (error) {
    console.error("Erro ao remover evento:", error);
    return new Response(JSON.stringify({ message: "Erro ao remover mesa", error: error.message }), {
      status: 500,
    });
  }
};