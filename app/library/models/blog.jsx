import mongoose from "mongoose";

const dataschema = mongoose.Schema({
//  title
  name: String,
  // description
  fname: String,
  // image
  contact: String,
  // uid
  useruid:String,
  // username
  names:String,
  date:{
    type: Date,
    default:Date.now()
  }
});

if (mongoose.models["products"]) {
  delete mongoose.models["products"];
}

export const product = mongoose.model("products", dataschema);
