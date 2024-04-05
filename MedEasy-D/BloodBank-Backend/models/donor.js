import mongoose from "mongoose";

const donorSchema=mongoose.Schema({
    name: { type: String},
    username:{ type: String},
    password:{ type: String},
    gender: { type: String},
    age: { type: String},
    bloodgroup: { type: String},
    phone: { type: String},
    state : { type: String},
    city : { type: String}
});

const Donor=mongoose.model('Donor',donorSchema);

export default Donor;