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
// src/routes.ts
const express_1 = require("express");
const folioController_1 = require("./controllers/folioController");
const Visitante_1 = __importDefault(require("./models/Visitante"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const router = (0, express_1.Router)();
// Rutas para la API
router.get("", folioController_1.obtenerNuevoFolio);
// Endpoint para crear un nuevo visitante
router.post('/visitantes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, email, telefono, empleado } = req.body;
        const fechaRegistro = moment_timezone_1.default.tz("America/Mexico_City").toDate(); // Establece la fecha y hora actual de Querétaro
        const nuevoDoctor = new Visitante_1.default({
            nombre,
            email,
            telefono,
            fechaRegistro,
            empleado
        });
        yield nuevoDoctor.save();
        res.status(201).json(nuevoDoctor);
    }
    catch (error) {
        console.error('Error al guardar el visitante:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
}));
exports.default = router;
