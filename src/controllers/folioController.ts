// src/controllers/folioController.ts
import { Request, Response } from "express";
import { crearFolio } from "../services/folioService";

export const obtenerNuevoFolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoFolio = await crearFolio();
    res.json({ folio: nuevoFolio });
  } catch (error) {
    res.status(500).json({ error: "Error al generar el folio" });
  }
};
