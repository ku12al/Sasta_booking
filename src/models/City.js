const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
      CityName:{
            type:String,
            required:true
      },
      image:{
            type:String,
            required:true
      },
      description:{
            type:String,
            required:true
      },
      cusines:{
            type:[String],
            required:true
      }

})
const CityModels = mongoose.model('City', CitySchema);

module.exports = CityModels;