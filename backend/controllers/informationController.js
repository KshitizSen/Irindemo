const Information = require("../model/Information");

//Get all Informations
const information_all = async (req,res) => {
    try {
        const informations = await Information.find();
        res.json(informations);
    } catch (error) {
        res.json({messsage: error});
    }
};

//Get single Information
const information_SingleDetail = async (req,res) => {
    try{
        const informations = await Information.findById(req.params.informationId);
        res.json(information);
    }catch (error) {
        res.json({messsage: error});
    }
};

//Add New Information
const information_create = async (req,res) => {
    const information = new Information({
        Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Email: req.body.Email,
    DOB: req.body.DOB,
    });
        try{
            const savedInformation = await information.save();
            res.json(savedInformation);
        }catch (error) {
            res.status(400).send(error);
        }
    };

//Update Information
const information_Update = async (req,res) => {
    try {
        const information ={
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            DOB: req.body.DOB
        };   
        
        const UpdateInformation = await Information.findByIdAndUpdate(
            {_id: req.params. informationId},
            information
        );

            res.json(UpdateInformation);
    } catch (error) {
        res.json({messsage: error});
    }
};

//Delete Information
const information_Delete = async (req,res) => {
    try{
        const DeleteInformation = await Information.findByIdAndDelete(
            {_id: req.params. informationId},
        );
        res.json(DeleteInformation);
        
    }catch (error) {
        res.json({messsage: error});
    }
};

module.exports = {
    information_all,
    information_SingleDetail,
    information_create,
    information_Update,
    information_Delete
}