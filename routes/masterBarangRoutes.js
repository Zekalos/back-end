module.exports = (express, app) => {
    const controller = require("../controller/masterBarangController.js");
    const router = express.Router();
  
    router.get("/", controller.seeAll);
    router.get("/search", controller.searchByName);
    router.get("/list", controller.seeMasterBarangProyek);
    router.get("/check", controller.checkBarang);

    router.get("/seeNamaBarang", controller.seeNamaBarang);
  
    router.post("/", controller.create);

    router.put("/update", controller.update);
  
    app.use("/api/masterBarang", router);
  };