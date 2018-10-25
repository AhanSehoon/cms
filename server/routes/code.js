const express = require('express');
const models = require('../../models');
const router = express.Router();
const request = require('request');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/code', function(req, res, next) {
    console.log(req.query);
    getCode(req.query, res);
});

const getCode = (data, res) => {    
    models.code.findAll({
        //where: {
        //    useYn: 'Y',
            //[Op.and]: {upperComCd: data.upperComCd}
        //},
        //order: [
        //    ['comCdLvl', 'ASC'],
        //    ['comCdOrd', 'ASC']
        //]
    })
    .then( result => {
        res.json(result);
    })
    .catch( err => {
        console.log(err)
    });
}

module.exports = router;