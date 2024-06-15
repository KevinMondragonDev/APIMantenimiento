// src/services/folioService.ts
import Folio, { IFolio } from "../models/Folio";

let contador = 0; // Contador global para asegurar un componente único

function generarCaracterAleatorio(): string {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

function generarFolio(): string {
  contador++; // Incrementar el contador para cada folio generado
  const base = contador.toString().padStart(3, "0"); // Asegura una base de 3 dígitos
  let folio = `F${base}`; // 'F' seguido de la base numérica

  while (folio.length < 8) {
    folio += generarCaracterAleatorio();
  }

  return folio;
}

export const crearFolio = async (): Promise<string> => {
  let nuevoFolio: string;
  let folioExistente: IFolio | null;

  do {
    nuevoFolio = generarFolio();
    folioExistente = await Folio.findOne({ folio: nuevoFolio });
  } while (folioExistente);

  const folio = new Folio({ folio: nuevoFolio });
  await folio.save();

  return nuevoFolio;
};
