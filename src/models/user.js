const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    email: {
        type:String,
        required:true,
        maxlength: 60,
        minlength: 6
    },
    name: {
        type:String,
        required:true,
        maxlength:20,
        minlength:2
    },
    password: {
        type:String,
        required:true,
        maxlength: 12,
        minlength:6
    },
    age: {
        type:Number
    },
    isAdmin: {
        type:Boolean
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User;