// src/models/Folio.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IFolio extends Document {
  folio: string;
}

const folioSchema: Schema = new Schema({
  folio: { type: String, required: true, unique: true },
});

export default mongoose.model<IFolio>("Folio", folioSchema);
