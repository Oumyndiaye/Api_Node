const mongoose = require('mongoose');
const chickenSchema = mongoose.Schema({
    name: { type:String ,require:true },
    birthday: { type:Date },
    weight: {type: Number, required:true},
    steps: { type: Number ,default:0},
    isRunning: {type: Boolean, default:false},
    //    title: { type:String ,required:true },
    //    description: { type:String ,required:true },
    //    imageUrl: { type:String ,required:true },
    //    description: { type:String ,required:true },
    //    userId: { type:String ,required:true },

});
module.exports = mongoose.model('Chicken',chickenSchema);