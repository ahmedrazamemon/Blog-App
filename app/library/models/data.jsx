import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Number: Number,
});

if (mongoose.models["AllUsers"]) {
  delete mongoose.models["AllUsers"];
}

export const Userslist = mongoose.model("AllUsers", UserSchema);
