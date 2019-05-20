const mongoose = require('mongoose');

const userSchemma = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name:{type:String, required:false},
     email:{type:String, required:false,unique:true,lowercase:true},
     password:{type:String, required:false,select:false},
     createdAt:{type:Date, default:Date.Now}
});

module.exports = mongoose.model('user',userSchemma);