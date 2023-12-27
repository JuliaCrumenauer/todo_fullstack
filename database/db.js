const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("mongodb+srv://root:admin@todolist.zbdmc8u.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongo DB Atlas Conectado!");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
