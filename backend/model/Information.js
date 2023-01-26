const mongoose =require("mongoose");

const InformationSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    DOB: String,
});


module.exports = mongoose.model("Information",InformationSchema);
