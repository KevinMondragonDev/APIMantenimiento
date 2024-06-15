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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerNuevoFolio = void 0;
const folioService_1 = require("../services/folioService");
const obtenerNuevoFolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoFolio = yield (0, folioService_1.crearFolio)();
        res.json({ folio: nuevoFolio });
    }
    catch (error) {
        res.status(500).json({ error: "Error al generar el folio" });
    }
});
exports.obtenerNuevoFolio = obtenerNuevoFolio;
