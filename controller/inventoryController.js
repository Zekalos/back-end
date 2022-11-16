const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const barang = await db.inventoryVanyaParkClusterAzura.create({
            //kodebarang: req.body.kodebarang,
            namabarang: req.body.namabarang,
            proyek: req.body.proyek,
            quantity: req.body.quantity,
            satuan: req.body.satuan
        })
        res.json(barang)
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const barang = await db.inventoryKantorKelurahanCilenggang.create({
            //kodebarang: req.body.kodebarang,
            namabarang: req.body.namabarang,
            proyek: req.body.proyek,
            quantity: req.body.quantity,
            satuan: req.body.satuan
        })
        res.json(barang)
    }
};

exports.seeAllInventory = async (req, res) => {
    try{
        const inventory = await db.inventory.findAll({
            where: {
                proyek: req.body.proyek
            }
        });
        res.json(inventory);
    }catch(e){
        res.json(e);
    }
    
};

exports.findInventory = async (req, res) =>{
    let data = req.query
    try{
        const found = await db.inventory.findOne({
            where: {
                namabarang: data.namabarang,
                proyek: data.proyek
            }
        })
        res.json(found)
    }catch(e){
        res.json(e)
    }
    /*let data = req.body;
    try{
        for(let i = 0 ; i < data.length; i++){
            const found = await db.inventory.findOne({
                where: {
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek
                }
            });
            res.json(found);
        }
    }catch (e){
        console.error(e)
    }*/
    
}

// gk pake
exports.seeAllVANYAPARKCLUSTERAZURA = async (req, res) => {
    const inventory = await db.inventoryVanyaParkClusterAzura.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllKANTORKELURAHANCILENGGANG = async (req, res) => {
    const inventory = await db.inventoryKantorKelurahanCilenggang.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllGUDANGLENGKONG= async (req, res) => {
    const inventory = await db.inventoryGudangLengkong.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllGUDANGSERPONG = async (req, res) => {
    const inventory = await db.inventoryGudangSerpong.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllSERPONGLAGOONA16 = async (req, res) => {
    const inventory = await db.inventorySerpongLagoonA16.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllKANAPARKCLUSTERNOBU = async (req, res) => {
    const inventory = await db.inventoryKanaparkClusterNobu.findAll();
    res.json(inventory);
};
// gk pake
exports.seeAllGATECLUSTER = async (req, res) => {
    const inventory = await db.inventoryGateCluster.findAll();
    res.json(inventory);
};
    
/* gk pake */
exports.findInventoryGateCluster = async (req, res) =>{
    const found = await db.inventoryGateCluster.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryKanaparkClusterNobu = async (req, res) =>{
    const found = await db.inventoryKanaparkClusterNobu.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryserpongLagoonA16 = async (req, res) =>{
    const found = await db.inventorySerpongLagoonA16.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryGudangSerpong = async (req, res) =>{
    const found = await db.inventoryGudangSerpong.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryKantorKelurahanCilenggang = async (req, res) =>{
    const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryVanyaParkClusterAzura = async (req, res) =>{
    const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.query.namabarang);
    res.json(found);
}

exports.findInventoryGudarngLengkong = async (req, res) =>{
    const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.query.namabarang);
    res.json(found);
}


exports.inventoryBarangMasuk = async (req, res) => {
    let data = req.body;
    
    for(let i = 0; i < data.length; i++){
        try{
            const found = await db.inventory.findOne({
                where: {
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek
                }
            })
            if(found !== null){
                const update = await db.inventory.update(
                    {
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            proyek: data[i].proyek
                        } 
                    }
                )
                res.json(update);
            }else{
                const create = await db.inventory.create({
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })

                res.json(create)
            }
        }catch(e) {
            console.error(e)
        }
    }
}

/* gk pake
exports.inventoryBarangMasuk = async (req, res) => {
    const data = req.body;

    for(let i = 0; i < data.length; i++){
        
        if(data[i].proyek === "VANYA PARK CLUSTER AZURA"){
            const found = await db.inventoryVanyaParkClusterAzura.findByPk(data[i].namabarang);
            if(found !== null){
                const update = await db.inventoryVanyaParkClusterAzura.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryVanyaParkClusterAzura.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "KANTOR KELURAHAN CILENGGANG"){
            const found = await db.inventoryKantorKelurahanCilenggang.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryKantorKelurahanCilenggang.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryKantorKelurahanCilenggang.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }  
        if(data[i].proyek === "KANAPARK CLUSTER NOBU"){
            const found = await db.inventoryKanaparkClusterNobu.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryKanaparkClusterNobu.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryKanaparkClusterNobu.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GUDANG SERPONG"){
            const found = await db.inventoryGudangSerpong.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGudangSerpong.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGudangSerpong.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GUDANG LENGKONG"){
            const found = await db.inventoryGudangLengkong.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGudangLengkong.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGudangLengkong.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "GATE CLUSTER"){
            const found = await db.inventoryGateCluster.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventoryGateCluster.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventoryGateCluster.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        }
        if(data[i].proyek === "SERPONG LAGOON A16"){
            const found = await db.inventorySerpongLagoonA16.findByPk(data[i].namabarang);
            if(found !== null){
        
                const update = await db.inventorySerpongLagoonA16.update(
                    {   
                        quantity: parseFloat(data[i].quantity) + found.quantity
                    },
                    {
                        where: {
                            namabarang: data[i].namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            }else{
                const barang = await db.inventorySerpongLagoonA16.create({
                    //kodebarang: req.body.kodebarang,
                    namabarang: data[i].namabarang,
                    proyek: data[i].proyek,
                    quantity: data[i].quantity,
                    satuan: data[i].satuan
                })
                res.json(barang)
            }
        } 
        
    }
    
};
*/

exports.inventoryBarangKeluar = async (req, res) => {
    let data = req.body;
    try{
        const found = await db.inventory.findOne({
            where: {
                namabarang: data.namabarang,
                proyek: data.proyek
            }
        })
        if(found !== null && found.quantity >= data.quantity) {
            const update = await db.inventory.update(
                {   
                    quantity: found.quantity - parseFloat(data.quantity)
                },
                {
                    where: {
                        namabarang: data.namabarang,
                        proyek: data.proyek
                    }
                }
            )
            res.json(update);
        } else{
            return null;
        }
    }catch(e) {
        console.error(e)
    }
   
    /* gk pake
    if(req.body.proyek === "VANYA PARK CLUSTER AZURA"){
        const found = await db.inventoryVanyaParkClusterAzura.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryVanyaParkClusterAzura.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "GATE CLUSTER"){
        const found = await db.inventoryGateCluster.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryGateCluster.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "SERPONG LAGOON A16"){
        const found = await db.inventorySerpongLagoonA16.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventorySerpongLagoonA16.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "GUDANG LENGKONG"){
        const found = await db.inventoryGudangLengkong.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryGudangLengkong.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "GUDANG SERPONG"){
        const found = await db.inventoryGudangSerpong.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryGudangSerpong.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "KANAPARK CLUSTER NOBU"){
        const found = await db.inventoryKanaparkClusterNobu.findByPk(req.body.namabarang);
        
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryKanaparkClusterNobu.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } }else{
                return null;
            }
    }
    if(req.body.proyek === "KANTOR KELURAHAN CILENGGANG"){
        const found = await db.inventoryKantorKelurahanCilenggang.findByPk(req.body.namabarang);
           
        if(found !== null){
            if(found.quantity >= req.body.quantity) {
                const update = await db.inventoryKantorKelurahanCilenggang.update(
                    {   
                        quantity: found.quantity - parseFloat(req.body.quantity)
                    },
                    {
                        where: {
                            namabarang: req.body.namabarang,
                            //proyek: req.body.proyek
                        }
                    }
                )
                res.json(update);
            } 
        }else{
            return null;
        }
        
    }else{
        return null;
    }
    */
};


exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};


/*const found = await db.inventory.findOne({
            where: {
                namabarang: req.body.namabarang,
                proyek: req.body.proyek
            }
        });*/