import { Schema, model, models } from "mongoose";

const MesasSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    nomeMesa: { type: String },
  },
  {
    timestamps: true,
  }
);

const Mesas = models.Mesas || model("Mesas", MesasSchema);

export default Mesas;