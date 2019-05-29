const mongoose = require('mongoose');

const advSchemma = mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,
 title:{type:String, required:true},
 price:{ type:Number,required:true},
 createdAt:{type:Date, default:Date.Now},
 category:{type: mongoose.Schema.ObjectId, ref:'category',required:true},
 subcategory:{type: mongoose.Schema.ObjectId, ref:'subcategory',required:true},

 negotiable :  Boolean


});

module.exports = mongoose.model('adv',advSchemma);