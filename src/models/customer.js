const mongoose = require('mongoose')

//shape data
const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    adress: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    { timestamps: true }
);

const Customer = mongoose.model('user', customersSchema);

module.exports = Customer