const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Product name cannot be empty'],
    }, 
    price:{
        type: Number,
        required:[true, 'Product price cannot be empty'],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported', 
        },
        // enum:['ikea', 'liddy', 'caressa', 'marcos']
    }
})

module.exports = mongoose.model('Product', productschema)