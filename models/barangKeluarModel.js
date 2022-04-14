module.exports = (sequelize, DataTypes) => {
    const barangKeluar = sequelize.define('barangKeluar',
    {
        /*kodebarang:{ //belum pake
            type: DataTypes.STRING,
            allowNull: false
        },*/
        namabarang:{ //FK master barang
            type: DataTypes.STRING,
            allowNull: false
        },
        kodeKeluar:{ //PK
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        namaPengambil:{
            type: DataTypes.STRING,
            allowNull: false
        },
        /*progress:{
            type: DataTypes.INTEGER,
            allowNull: false
        }, */
        tgl:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING
        }, 
        satuan:{
            type: DataTypes.STRING
        },
        proyek:{
            type: DataTypes.STRING
        },
        keterangan:{
            type: DataTypes.STRING
        },
        tujuan:{
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        
    });
    return barangKeluar;
}