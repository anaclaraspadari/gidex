const sync = require('./models/sync');

const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json({limit:'10mb'}));

app.use(express.urlencoded({limit: '10mb'}));

app.use(cors());


app.get('/', (req, res) => {
    return res.json({
        system: {
            nome: "GenshinDex",
            version: '0.0.1-SNAPSHOT'
        },
    });

});


const usuariosRouter = require('./routes/usuarios-route');
app.use('/usuarios', usuariosRouter);

const armasRouter = require('./routes/armas-route');
app.use('/armas', armasRouter);

const elementosRouter = require('./routes/elementos-route');
app.use('/elementos', elementosRouter);

const nacoesRouter = require('./routes/nacoes-route');
app.use('/nacoes', nacoesRouter);

const talentosRouter = require('./routes/talentos-route');
app.use('/talentos', talentosRouter);

const personagensRouter = require('./routes/personagens-route');
app.use('/personagens', personagensRouter);

const estrelasRouter = require('./routes/estrelas-route');
app.use('/estrelas', estrelasRouter);

// const colecoesRouter = require('./routes/colecoes-route');
// app.use('/colecoes', colecoesRouter);

app.listen(3030, () => console.log("Listening at 3030"));