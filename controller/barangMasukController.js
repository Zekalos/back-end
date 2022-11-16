const db = require("../models");
const Op = db.Sequelize.Op;

exports.createBarangMasuk = async (req, res) => {
    const barang = await db.barangMasuk.create({
        namabarang: req.body.namabarang,
        namaPenerima: req.body.namaPenerima,
        quantity: req.body.quantity,  
        noSuratJalan: req.body.noSuratJalan1 + req.body.noSuratJalan2,
        tgl: req.body.tgl,
        status: "masuk",
        lokasi: req.body.lokasi,
        proyek: req.body.proyek,
        keterangan: req.body.keterangan,
        satuan: req.body.satuan,
        kodePO: ""
    });
    res.json(barang)
    
};
exports.masukbanyakBarang = async (req, res) => {
    try{
        const barang = await db.barangMasuk.bulkCreate(req.body);
        res.json(barang)
    } catch (e) {
        console.error(e);
    }finally {
        console.log('executed successfully');
    }
    
};


exports.seeAllBarangMasuk = async (req, res) => {
    try{
        const barangMasuk = await db.barangMasuk.findAll({
        order: [['tgl', 'DESC']]
        });

        res.json(barangMasuk);
    }catch(e){
        console.error(e)
    }
}

exports.getPO = async (req, res) => {
    const barang = await db.barangMasuk.findAll(
        {
            where: {
                namabarang: req.params.namabarang
            },
            //attributes: {include: ['kodePO', 'proyek']}
        }
    );

    res.json(barang);
}

exports.searchByName = async (req, res) => {

    const barangMasuk = await db.barangMasuk.findAll({
        where:{
            namabarang: {
                $in: req.body.namabarang
            }
    }});

    res.json(barangMasuk);
    console.log(res.json(barangMasuk));
};

exports.update = (req, res) => {
    const filePath = req.body.filePath
    const data = req.body
    const ID = req.params.id;

    const fs = require('fs')
    fs.readFile( filePath , 'utf-8' , (err, Jsondata)=>{
      if (err) {
        return;
      }try{
        // const updatedData = {...data, ...inputs}
        res.json(Jsondata)
      }catch(err){
        res.json(err)
      }
    })
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

