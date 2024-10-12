const mongoose = require('mongoose');

const appintments_schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
       
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
       
    },
    payment:{
        type:String,
        default:'unpaid'
    },
    status: {
        type: String,
        default: "unchecked",
    },
    invoice: {
        type: String,
    },
    disease: {
        type: String,
        default: "Healthy",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    about:{
        type:String,

    },
    medicine:{
        type:[String]
    },
   
    

});


const appointments = mongoose.model("appointments", appintments_schema);
module.exports = appointments;