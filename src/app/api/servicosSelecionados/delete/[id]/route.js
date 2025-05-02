import { connectToDB } from "../../../../../../utils/database";
import ServicosSelecionados from "../../../../../../models/ServicosSelcionados";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), { status: 400 });
    }

    await connectToDB(); // Conecta ao banco de dados

    const deletedEvento = await ServicosSelecionados.findByIdAndDelete(id);

    if (!deletedEvento) {
      return new Response(JSON.stringify({ message: "Evento não encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Evento removido com sucesso" }), { status: 200 });
  } catch (error) {
    console.error("Erro ao remover evento:", error);
    return new Response(JSON.stringify({ message: "Erro ao remover evento", error: error.message }), {
      status: 500,
    });
  }
};
