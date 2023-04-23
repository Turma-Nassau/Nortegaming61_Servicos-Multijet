const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const recargaModel = require('../models/recarga')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarrecarga = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await recargaModel.create({
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        quantidade: req.body.quantidade,
    }).then((result) => {
        res.status(201).json({
            message: "Solicitação de recarga enviada com sucesso!",
            recarga: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao enviar solicitação de recarga",
            error: err
        });
    });
}

exports.verrecargaPorId = async (req, res) => {
    console.log('GET');
    await recargaModel.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Solicitação de recarga encontrada",
            recarga: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitação de recarga",
            error: err
        });
    });
}

exports.verrecargasPorUsuario = async (req, res) => {
    console.log('GET');
    await recargaModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação de recarga encontrada",
            recargas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitação de recarga",
            error: err
        });
    });
}

exports.verTodasrecargas = async (req, res) => {
    console.log('GET');
    await recargaModel.findAll().then((result) => {
        res.status(200).json({
            message: "Solicitações de recargas encontradas",
            recargas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitações de recargas",
            error: err
        });
    });
}

exports.atualizarrecarga = async (req, res) => {
    console.log('PATCH');
    await recargaModel.update({
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        quantidade: req.body.quantidade,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação de recarga atualizada",
            recarga: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar solicitação de recarga",
            error: err
        });
    });
}

exports.deletarrecarga = async (req, res) => {
    console.log('DELETE');
    await recargaModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação de recarga deletada",
            recarga: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar solicitação de recarga",
            error: err
        });
    });
}