import { Schema, model, models } from "mongoose";

const GruposSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    nomeGrupo: { type: String },
  },
  {
    timestamps: true,
  }
);

const Grupos = models.Grupos || model("Grupos", GruposSchema);

export default Grupos;