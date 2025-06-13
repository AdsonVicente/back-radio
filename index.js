const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Libera CORS para todas as origens

app.get('/api/currentsong', async (req, res) => {
    try {
        const response = await fetch('http://08.stmip.net:8668/currentsong?sid=1');
        const text = await response.text();
        res.send(text.trim());
    } catch (err) {
        console.error('Erro ao buscar música:', err);
        res.status(500).send('Erro ao buscar música');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor proxy rodando em http://localhost:${PORT}`);
});
