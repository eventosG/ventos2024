import { connectToDB } from "../../../../../../utils/database";
import Evento from "../../../../../../models/evento";
import { ObjectId } from "mongodb";

export const PUT = async (req, { params }) => {
  try {
    const updateData = await req.json(); // Recebe os dados a atualizar
    const { id } = params; // Captura o ID da URL corretamente no Next.js

    console.log("updateData", updateData);
    console.log("id", id);

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "ID inválido" }), { status: 400 });
    }

    await connectToDB(); // Conecta ao banco de dados

    const updatedEvento = await Evento.findByIdAndUpdate(
      id,
      { $set: updateData }, // Atualiza apenas os campos recebidos
      { new: true, runValidators: true } // Retorna o documento atualizado e valida os campos
    );

    if (!updatedEvento) {
      return new Response(JSON.stringify({ message: "Evento não encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify(updatedEvento), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    return new Response(JSON.stringify({ message: "Erro ao atualizar evento", error: error.message }), {
      status: 500,
    });
  }
};
