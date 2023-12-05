import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  isAdmin: Boolean,
  createdOn: Number,
});

export const User = mongoose.model("user", userSchema);

export const getUserByFilter = async function (params) {
  try {
    const record = await User.find(params).then((record, er) => {
      return record;
    });
  } catch (err) {
    console.log(err);
  }
};
