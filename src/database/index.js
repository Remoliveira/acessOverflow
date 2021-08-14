const mongoose = require("mongoose");

// const connection = mongoose.connect("mongodb://localhost/acessOverflow",  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});
const connection = mongoose.connect('mongodb://admin:adh5N66GxGZJwnha@SG-BDTP-46047.servers.mongodirector.com:27017/acessOverflow?authSource=admin',  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection successful')
});
// const app = mongoose.model("app",{name: String})

// const a = new app({name:"alal"})
// a.save().then(()=>{
//     console.log("add")
// })

module.exports = connection;
