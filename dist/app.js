"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORT = 3034;
// Conexión a la base de datos
(0, database_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Rutas
app.use("/", routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ` + PORT);
});
