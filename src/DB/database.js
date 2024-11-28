const mongoose = require('mongoose');


const ConnectDatabase = () =>{
      mongoose.connect('mongodb://127.0.0.1/MMTDB',{
            useNewUrlParser: true,
            useUnifiedTopology: true
      })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.log(err))
}

module.exports = ConnectDatabase;