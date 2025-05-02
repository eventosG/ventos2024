import { connectToDB } from "../../../../../../utils/database";
import Grupos from "../../../../../../models/grupos";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), { status: 400 });
    }

    await connectToDB(); // Conecta ao banco de dados

    const deletedGroup = await Grupos.findByIdAndDelete(id);

    if (!deletedGroup) {
      return new Response(JSON.stringify({ message: "Grupo não encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Grupo removido com sucesso" }), { status: 200 });
  } catch (error) {
    console.error("Erro ao remover grupo:", error);
    return new Response(JSON.stringify({ message: "Erro ao remover grupo", error: error.message }), {
      status: 500,
    });
  }
};