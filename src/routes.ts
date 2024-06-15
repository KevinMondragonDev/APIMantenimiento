// src/routes.ts
import { Router } from "express";
import { obtenerNuevoFolio } from "./controllers/folioController";
import Doctor from './models/Visitante';
import moment from 'moment-timezone';

const router = Router();

// Rutas para la API
router.get("", obtenerNuevoFolio);

// Endpoint para crear un nuevo visitante
router.post('/visitantes', async (req, res) => {
  try {
    const { nombre, email, telefono, empleado } = req.body;
    const fechaRegistro = moment.tz("America/Mexico_City").toDate(); // Establece la fecha y hora actual de Querétaro

    const nuevoDoctor = new Doctor({
      nombre,
      email,
      telefono,
      fechaRegistro,
      empleado
    });
    
    await nuevoDoctor.save();
    res.status(201).json(nuevoDoctor);
  } catch (error) {
    console.error('Error al guardar el visitante:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

export default router;
