import { Schema, model, models } from "mongoose";

const RadMapSchema = new Schema(
  {
    criadoPor: { type: String },
    criadoPorEmail: { type: String },
    roadMapTitle: { type: String },
    roadMapText: { type: String },
    tipoEvento: { type: String },
  },
  {
    timestamps: true,
  }
);

const RoadMap = models.RoadMap || model("RoadMap", RadMapSchema);

export default RoadMap;