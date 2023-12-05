import mongoose from "mongoose";

async function MongoConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chat");
}

export default MongoConnect;
