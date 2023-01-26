const router=require("express").Router();
const informationController = require('../controllers/informationController');

router.post("/",informationController.information_create); //inserting data
router.get("/",informationController.information_all); // for getting all data
router.get("/:informationId",informationController.information_SingleDetail); // also used for Single data receive
router.put("/:informationId",informationController.information_Update); // for Update the data
router.delete("/:informationId",informationController.information_Delete);// for delete data

module.exports = router;
