import { Schema, model, models } from "mongoose";

const ConvidadosSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    nomeConvidado: { type: String },
    grupos: { type: String },
    mesas: { type: String },
    participacao: { type: String },
    momento2: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

const Convidados = models.Convidados || model("Convidados", ConvidadosSchema);

export default Convidados;