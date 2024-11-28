const mongoose = require('mongoose')

const adventureSchema = new mongoose.Schema({
      cityId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true
      },
      category:{
            type:[String],
            enum: ['adventure', 'food', 'shopping'],
      },
      images:{
            type:[String],
            required:true,
      },
      duration:{
            type:Number,
            required:true
      },
      pricePerHead:{
            type:Number,
            required:true
      },
      currency:{
            type:String,
            default:"INR"
      }
})

const Adventure = mongoose.model('Adventure', adventureSchema);
module.exports = Adventure;