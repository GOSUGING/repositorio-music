import { pool } from "../database/connection.js";


const all = async () => {
    try {
        const query = 'SELECT * FROM canciones';
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        throw new Error('Error al obtener las canciones');
    }
};

const insert = async (titulo, artista, tono) => {
    try {
        const query = 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)';
        const values = [titulo, artista, tono];
        await pool.query(query, values);
    } catch (error) {
        throw new Error('Error al insertar la canción');
    }
};

const update = async (id, titulo, artista, tono) => {
    try {
        const query = 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 WHERE id=$4';
        const values = [titulo, artista, tono, id];
        await pool.query(query, values);
    } catch (error) {
        throw new Error('Error al actualizar la canción');
    }
};

const remove = async (id) => {
    try {
        const query = 'DELETE FROM canciones WHERE id=$1';
        const values = [id];
        await pool.query(query, values);
    } catch (error) {
        throw new Error('Error al eliminar la canción');
    }
};

export const repertorioModel = {
    all,
    insert,
    update,
    remove
}