import mongoose from "mongoose";

const requestSchema=mongoose.Schema({
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

const Requester=mongoose.model('Requester',requestSchema);

export default Requester;