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
     thumbnailUrl: {
         type:String,
     },
     categoryId: {
         type:mongoose.Schema.Types.ObjectId,
         required:true
     }
 }, {
    toJSON: {
        transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        return ret
        }
    }
 })


 const Product = mongoose.model('product', ProductSchema)
 module.exports = Product