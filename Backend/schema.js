const mongoose = require("mongoose");

const zooSchema = new mongoose.Schema({
  type: {
    type: String
  },
  biome: {
    type: String
  },
  name:{
    type:String
  },
  description: {
    type: String
  },
  scientific_name:{
    type:String
  },
  term_for_young:{
    type:String
  },
  lifespan:{
    type:String
  },
  mass:{
    type:String
  },
  speed:{
    type:String
  },
  gestation_period:{
    type:String
  },
  higher_classification:{
    type:String
  },
  conservation_status:{
    type:String
  },
  collective_noun:{
    type:String
  },
  fun_fact:{
    type:String
  }
});

const zoo = mongoose.model("zoo", zooSchema);

module.exports = zoo;
