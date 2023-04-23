const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const consertoimpModels = require('../models/conserto_impressora')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarconsertoimp = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await consertoimpModels.create({
        marca_da_impressora: req.bodymarca_da_impressora,
        modelo: req.body.modelo,
        referencia: req.body.referencia,
        serialnumber: req.body.serialnumber,
        defeito: req.body.defeito,
        tipo: req.body.tipo,
        mais_informacoes: req.body.mais_informacoes,
    }).then((result) => {
        res.status(201).json({
            message: "Solicitação de conserto enviada com sucesso!",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao enviar solicitação de conserto",
            error: err
        });
    });
}

exports.verTodosconsertosimp = async (req, res) => {
    console.log('GET');
    await consertoimpModels.findAll().then((result) => {
        res.status(200).json({
            message: "Consertos de impressoras encontrados",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar consertos de impressoras",
            error: err
        });
    })
}

exports.verconsertosimpPorUsuario = async (req, res) => {
    console.log('GET');
    await consertoimpModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Consertos de impressoras encontrados",
            consertos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar consertos de impressoras",
            error: err
        });
    })
}

exports.verconsertoimpPorId = async (req, res) => {
    console.log('GET');
    await consertoimpModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Conserto de impressora encontrado",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar conserto de impressora",
            error: err
        });
    })
}

exports.atualizarconsertoimp = async (req, res) => {
    console.log('PATCH');
    console.log(req.body);
    await consertoimpModels.update({
        marca_da_impressora: req.bodymarca_da_impressora,
        modelo: req.body.modelo,
        referencia: req.body.referencia,
        serialnumber: req.body.serialnumber,
        defeito: req.body.defeito,
        tipo: req.body.tipo,
        mais_informacoes: req.body.mais_informacoes,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "conserto de impressora atualizado com sucesso",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar conserto de impressora",
            error: err
        });
    })
}

exports.deletarconsertoimp = async (req, res) => {
    console.log('DELETE');
    await consertoimpModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "conserto de impressora deletado com sucesso",
            conserto: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar conserto de impressora",
            error: err
        });
    })
}