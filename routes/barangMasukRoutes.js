module.exports = (express, app) => {
    const controller = require("../controller/barangMasukController.js");
    const router = express.Router();
  
    router.get("/listBarangMasuk", controller.seeAllBarangMasuk);


    router.get("/getPO", controller.getPO);
  
    router.post("/addBarangMasuk", controller.createBarangMasuk);
    router.post("/addBanyak", controller.masukbanyakBarang);
    

  //  router.get("/Search", controller.searchByName);
  
    app.use("/api/barangMasuk", router);
};