const pool = require("../config/database.config");

const getMessages = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM mensaje');
    res.json(rows);
};

const saveMessage = async (req, res) => {
    const {contenido,remitente} = req.body;
    await pool.query(`INSERT INTO mensaje (contenido,remitente) VALUES ($1,$2)`,[
        contenido,
        remitente
    ]);
    res.send('Registro guardado');
};

module.exports = {
    getMessages,
    saveMessage
}