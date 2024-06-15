"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearFolio = void 0;
// src/services/folioService.ts
const Folio_1 = __importDefault(require("../models/Folio"));
let contador = 0; // Contador global para asegurar un componente único
function generarCaracterAleatorio() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
function generarFolio() {
    contador++; // Incrementar el contador para cada folio generado
    const base = contador.toString().padStart(3, "0"); // Asegura una base de 3 dígitos
    let folio = `F${base}`; // 'F' seguido de la base numérica
    while (folio.length < 8) {
        folio += generarCaracterAleatorio();
    }
    return folio;
}
const crearFolio = () => __awaiter(void 0, void 0, void 0, function* () {
    let nuevoFolio;
    let folioExistente;
    do {
        nuevoFolio = generarFolio();
        folioExistente = yield Folio_1.default.findOne({ folio: nuevoFolio });
    } while (folioExistente);
    const folio = new Folio_1.default({ folio: nuevoFolio });
    yield folio.save();
    return nuevoFolio;
});
exports.crearFolio = crearFolio;
