const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');


//shape data
const customersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {
        timestamps: true, //createdAt / updatedAt
        // statics: {
        //     findByDungBum(name) {
        //         return this.findOne({ name: new RegExp(name, 'i') })
        //     }
        // }
    }
);

customersSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('customer', customersSchema);

module.exports = Customer