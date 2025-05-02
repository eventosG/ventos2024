import { connectToDB } from "../../../../../../utils/database";
import Cronograma from "../../../../../../models/cronograma";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), { status: 400 });
    }

    await connectToDB(); // Conecta ao banco de dados

    const deletedGroup = await Cronograma.findByIdAndDelete(id);

    if (!deletedGroup) {
      return new Response(JSON.stringify({ message: "Cliente não encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Cliente removido com sucesso" }), { status: 200 });
  } catch (error) {
    console.error("Erro ao remover Cliente:", error);
    return new Response(JSON.stringify({ message: "Erro ao remover Cliente", error: error.message }), {
      status: 500,
    });
  }
};