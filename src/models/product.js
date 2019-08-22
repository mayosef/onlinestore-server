const mongoose = require('mongoose');


 const ProductSchema = new mongoose.Schema({
     title: {
         type:String,
         required:true
     },
     price: {
        type:Number,
        required:true
     },
     categoryId: {
         type:mongoose.Schema.Types.ObjectId,
         required:true
     }
 })


 const Product = mongoose.model('product', ProductSchema)
 module.exports = Product