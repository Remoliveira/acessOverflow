const mongoose = require("mongoose");

// const connection = mongoose.connect("mongodb://admin:admin@localhost:27017/acessOverflow",  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/tp_bd?authSource=admin',  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});




// const app = mongoose.model("app",{name: String})

// const a = new app({name:"remo"})
// a.save().then(()=>{
//     console.log("add")
// });

// module.exports = connection;