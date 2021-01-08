const mongoose = require('mongoose');

const chocoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a product must have a name'],
        unique: true,
        trim:true
    }, 
    price: {
        type: Number,
        required: [true, 'a product must have a price']
    },
    category: String,
    code: {
        type: Number,
        required: [true, 'a product must have a name'],
        unique: true,
        trim: true
    },                                                                                              
    description: {
        type: String,
        trim: true

    },
    createdAt: {
       type: Date,
       default: Date.now
    },
    quantity: {
        type: Number
       
    },
    weight:  {
        type: Number
      
    },
    priceDiscount: Number,
    imageCover: {
        type: String,

    }
   
});
const Choco = mongoose.model('Choco',chocoSchema);

module.exports = Choco;

