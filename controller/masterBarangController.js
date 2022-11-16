const db = require("../models");
const Op = db.Sequelize.Op;
const readXlsxFile = require("read-excel-file/node");

exports.create = async (req, res) => {
    /*const barang = {
        kodebarang: req.body.kodebarang,
        namabarang: req.body.namabarang,
        category: req.body.category, 
        subCategory: req.body.subCategory,
        type: req.body.type,
        merk: req.body.merk,  
        satuan: req.body.satuan,
        ukuran: req.body.ukuran
    };
    db.masterBarang.create(barang)
    .then(data => {
        res.send(data);
    }).catch(
        err => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the masterbarang."
              });
        }
    )
    */
    try{
        const barang = await db.masterBarang.create({
            //kodebarang: req.body.kodebarang,
            namabarang: req.body.namabarang,
            category: req.body.category, 
            subCategory: req.body.subCategory,
            type: req.body.type,
            merk: req.body.merk,  
            satuan: req.body.satuan,
            ukuran: req.body.ukuran,
            proyek: req.body.proyek,
            totalQTY: 0
        });
        res.json(barang);
    }catch(e){
        res.json(e);
    }
    
};

exports.seeAll = async (req, res) => {
    try{
        const masterBarang = await db.masterBarang.findAll();

        res.json(masterBarang);
    }catch(e){
        res.json(e);
    }
};

exports.seeMasterBarangProyek = async (req, res) => {
    const masterBarang = await db.masterBarang.findAll({
        where: {
            proyek: req.params.namaProyek
        }
    });

    res.json(masterBarang);
};

exports.seeNamaBarang = async (req, res) => {
    try{
        const masterBarang = await db.masterBarang.findAll({
            attributes: ['namabarang']
        });
        res.json(masterBarang);
    }catch(e){
        res.json(e);
    }
};


exports.checkBarang = async (req, res) => {
    const masterBarang = await db.masterBarang.findByPk(req.query.namabarang);

    res.json(masterBarang);
    
};

exports.searchByName = async(req, res) => {
    const name = req.body.namabarang;
    const masterBarang = await db.masterBarang.findAll({where:{namabarang: name}});

    res.json(masterBarang);
};

exports.update = async(req, res) => {
    const found = await db.masterBarang.findByPk(req.body.namabarang);
    /*const found = await db.inventory.findOne({
        where: {
            namabarang: req.body.namabarang,
            proyek: req.body.proyek
        }
    });*/
    if(found !== null){

        const update = await db.masterBarang.update(
            {   
                category: req.body.category, 
                subCategory: req.body.subCategory,
                type: req.body.type,
                merk: req.body.merk,  
                satuan: req.body.satuan,
                ukuran: req.body.ukuran
            },
            {
                where: {
                    namabarang: req.body.namabarang,
                    //proyek: req.body.proyek
                }
            }
        )
        res.json(update);
    }else{
        return;
    }
    
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
