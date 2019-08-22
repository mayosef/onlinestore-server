const mongoose = require('mongoose');

 const CategorySchema = new mongoose.Schema({
     name: {
         required:true,
         type:String
     },
 },{collection:'categories'});


 const Category = mongoose.model('category', CategorySchema)
 module.exports = Category;