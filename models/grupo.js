import { Schema, model, models } from "mongoose";

const GrupoSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    grupo: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Grupo = models.Grupo || model("Grupo", GrupoSchema);

export default Grupo;
