const express = require('express');
const app = express();


const fs = require('fs');
let PORT = 8000;
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');


const userRoutes = require('./routes/userRoutes')
const locacaoRoutes = require('./routes/locacaoRoutes')
const conserto_impressoraRoutes = require('./routes/conserto_impressora')
const conserto_notedeskRoutes = require('./routes/conserto_notedesk')
const recargaRoutes = require('./routes/recarga')
const { sequelize } = require('./models')


app.use(logger)

const connectDB = async () => {
    console.log('Checando conexao com banco de dados');
    try {
        await sequelize.authenticate();
        console.log('Banco de dados Conectado');
    }
    catch (e) {
        console.log('Conexao falhou', e);
        process.exit(1)
    }
}

(async () => {
    await connectDB();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: true,
    }))

    
    app.use('/api/users', userRoutes);
    app.use('/api/locacao', locacaoRoutes);
    app.use('/api/conserto_impressora', conserto_impressoraRoutes);
    app.use('/api/conserto_notedesk', conserto_notedeskRoutes);
    app.use('/api/recarga', recargaRoutes);
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.listen(PORT, () => {
        console.log(`Rodando na Porta ${PORT}.`)
    })

})()

function logger(request, response, next) {
    let log = `${new Date()}, ${request.method}, ${request.url}, ${request.body} \n`;
    fs.appendFile('./LOGGING.log', log, (err) => {
        if (err) throw err;
        console.log(log)
    })
    next()
}

