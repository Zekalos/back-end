const db = require("../models");
const Op = db.Sequelize.Op;

exports.find = async (req, res) => {
    try{
        const proyek = await db.proyeks.findOne({
        where: {namaProyek: req.body.namaProyek}
        });
        res.json(proyek)
    }catch(e){
        res.json(e);
    }
};

exports.seeAll = async (req, res) => {
    try{
        const satuan = await db.Satuan.findAll();

    res.json(satuan)
    }catch(e){
        res.json(e);
    }
};

exports.createSatuan = async (req, res) => {
    try{
        const satuan = await db.Satuan.create({
        satuan: req.body.satuan
        });
        res.json(satuan);
    }catch(e){
        res.json(e);
    }
};