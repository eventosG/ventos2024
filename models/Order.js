const { Schema, model, models, default: mongoose } = require("mongoose");

const OrderSchema = new Schema(
  {
    line_items: Object,
    name: String,
    email: String,
    address: String,
    city: String,
    contact: String,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Order = models.Order || model("Order", OrderSchema);
