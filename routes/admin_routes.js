const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const adminController = require('../controller/admin_controller');
const Viand = require('../model/viand');

router.route("/addViand").post(upload.single("img"), (req, res) => {
    console.log(req.file, " request file")

    let viand = JSON.parse(req.body.viand);
    var imgUrl = `https://sfos-backend.herokuapp.com/files/`

    const create_viand = new Viand({
        image: imgUrl + req.file.filename,
        name: viand.name,
    });
    adminController.saveViand(create_viand, res)
})

router.get('/retrieveViands', (req, res) => {
    adminController.RetrieveAllViand(res);
})

router.delete("/deleteViand/:id", (adminController.deleteViand));

router.route("/updateViand").post(upload.single("viand_img"), (req, res) => {
    console.log(req.file.filename, " --- req.file.filename")

    var imgUrl = `https://sfos-backend.herokuapp.com/files/`
    
    const edit_viand = {
        id: req.body.viand_id,
        image: imgUrl + req.file.filename,
        name: req.body.viand_name,
    }

    console.log(edit_viand , " obj for edit")
    // console.log(res , " res rs rs");
    adminController.updateViand(edit_viand, res)
})
// router.put("/updateViand/:id", adminController.updateViand);


router.post("/addFact", adminController.postFact);

router.put("/updateFact/:id", adminController.updateFact);

router.delete("/deleteFact/:id", adminController.deleteFact);

router.get("/getFact", adminController.getFact);

module.exports = router;

