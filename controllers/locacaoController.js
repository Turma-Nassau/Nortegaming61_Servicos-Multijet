const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const locacaoModel = require('../models/locacao')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarlocacao = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await locacaoModel.create({
        marca_da_impressora: req.bodymarca_da_impressora,
        modelo: req.body.modelo,
        referencia: req.body.referencia,
        franquia: req.body.franquia,
        tipo: req.body.tipo,
        funcoes_adicionais: req.body.funcoes_adicionais,
        mais_informacoes: req.body.mais_informacoes,
    }).then((result) => {
        res.status(201).json({
            message: "Solicitação enviada com sucesso!",
            locacao: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao enviar solicitação",
            error: err
        });
    });
}

exports.verlocacaoPorId = async (req, res) => {
    console.log('GET');
    await locacaoModel.findByPk(req.params.id).then((result) => {
        console.log(result)
        res.status(200).json({
            message: "Solicitação encontrada",
            locacao: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitação",
            error: err
        });
    });
}

exports.verlocacoesPorUsuario = async (req, res) => {
    console.log('GET');
    await locacaoModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação encontrada",
            locacaos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitação",
            error: err
        });
    });
}

exports.verTodaslocacoes = async (req, res) => {
    console.log('GET');
    await locacaoModel.findAll().then((result) => {
        res.status(200).json({
            message: "Solicitações encontradas",
            locacaos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar solicitações",
            error: err
        });
    });
}

exports.atualizarlocacao = async (req, res) => {
    console.log('PATCH');
    await locacaoModel.update({
        marca_da_impressora: req.bodymarca_da_impressora,
        modelo: req.body.modelo,
        referencia: req.body.referencia,
        franquia: req.body.franquia,
        tipo: req.body.tipo,
        funcoes_adicionais: req.body.funcoes_adicionais,
        mais_informacoes: req.body.mais_informacoes,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação atualizada",
            locacao: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar solicitação",
            error: err
        });
    });
}

exports.deletarlocacao = async (req, res) => {
    console.log('DELETE');
    await locacaoModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Solicitação deletada",
            locacao: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar solicitação",
            error: err
        });
    });
}