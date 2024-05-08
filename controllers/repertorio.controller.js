import { repertorioModel } from "../models/repertorio.model.js";

const getCanciones = async (req, res) => {
    try {
       const canciones = await repertorioModel.all();
       return res.json({ ok: true, canciones });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

const insertCancion = async (req, res) => {
    try {
       const { titulo, artista, tono } = req.body;
       await repertorioModel.insert(titulo, artista, tono);
       return res.json({ ok: true, message: 'Canción insertada correctamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

const updateCancion = async (req, res) => {
    try {
       const { id } = req.params;
       const { titulo, artista, tono } = req.body;
       await repertorioModel.update(id, titulo, artista, tono);
       return res.json({ ok: true, message: 'Canción actualizada correctamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

const deleteCancion = async (req, res) => {
    try {
       const { id } = req.params;
       await repertorioModel.delete(id);
       return res.json({ ok: true, message: 'Canción eliminada correctamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

export const repertorioController = {
    getCanciones,
    insertCancion,
    updateCancion,
    deleteCancion,
};