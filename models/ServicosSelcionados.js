import { Schema, model, models } from "mongoose";

const ServicosSelecionadosSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    nomeServico: { type: String },
    nomeServico2: { type: String },
    preco: { type: String },
    preco2: { type: String },
    descricao: { type: String },
    cor: { type: String },
  },
  {
    timestamps: true,
  }
);

const ServicosSelecionados = models.ServicosSelecionados || model("ServicosSelecionados", ServicosSelecionadosSchema);

export default ServicosSelecionados;
