import { Schema, model, models } from "mongoose";

const CronogramaSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    momento: { type: String },
    descricao: { type: String },
    interveniente: { type: String },
    duracao: { type: String },
  },
  {
    timestamps: true, 
  }
);

const Cronograma = models.Cronograma || model("Cronograma", CronogramaSchema);

export default Cronograma;
