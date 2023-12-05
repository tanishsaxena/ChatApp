import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  _id: String,
  lastMessage: String,
  users: [{ type: String }],
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
