// src/models/Visitante.ts
import mongoose, { Document, Schema } from "mongoose";

export interface Doctor extends Document {
  nombre: string;
  email: string;
  telefono: string;
  fechaRegistro: Date;
  empleado: number;
}

const DoctorSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: false },
  telefono: { type: String, required: true },
  fechaRegistro: { type: Date, required: true },
  empleado: { type: Number, required: false }
});

export default mongoose.model<Doctor>("Doctor", DoctorSchema);
