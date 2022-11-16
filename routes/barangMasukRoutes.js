module.exports = (express, app) => {
    const controller = require("../controller/barangMasukController.js");
    const router = express.Router();
  
    router.post("/listBarangMasuk", controller.seeAllBarangMasuk);
    //router.get("/getSuratJalan", controller.findSuratJalan);

    router.get("/getPO", controller.getPO);

    router.post("/addBarangMasuk", controller.createBarangMasuk);
    router.post("/addBanyak", controller.masukbanyakBarang);

    router.post("/update/:id" , controller.update);

  //  router.get("/Search", controller.searchByName);
  
    app.use("/api/barangMasuk", router);
};