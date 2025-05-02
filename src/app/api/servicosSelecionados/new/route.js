import { connectToDB } from "../../../../../utils/database";
import ServicosSelecionados from "../../../../../models/ServicosSelcionados";

export const POST = async (req, res) => {
  const {
      criadoPor,
      criadoPorEmail,
      nomeServico,
      preco,
      nomeServico2,
      preco2,
      descricao,
      cor,
  } = await req.json();

  try {
    await connectToDB();
    const newServico = new ServicosSelecionados({ 
        criadoPor,
        criadoPorEmail,
        nomeServico,
        preco,
        nomeServico2,
        preco2,
        descricao,
        cor,
    }); 

    await newServico.save();
    return new Response(JSON.stringify(newServico), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating new Serviço:", error);
    return new Response("Failed to create a new Serviço", { status: 500 });
  }
};