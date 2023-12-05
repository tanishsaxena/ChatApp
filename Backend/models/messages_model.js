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

const conversationSchema = new mongoose.Schema({
  _id: String,
  lastMessage: String,
  users: [{ type: userSchema }],
  lastMessageSentOn: Number,
  unReadCount: Number,
});

export const Conversation = mongoose.model("conversations", conversationSchema);

const messageSchema = new mongoose.Schema({
  _id: String,
  body: String,
  senderId: String,
  recieverId: String,
  conversationId: String,
  createdOn: Number,
});

export const Message = mongoose.model("messages", messageSchema);
