const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');


//shape data
const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adress: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    { timestamps: true }
);

customersSchema.plugin(mongoose_delete);

const Customer = mongoose.model('customer', customersSchema);

module.exports = Customer