import { Conversation, Message } from "../models/messages_model.js";
import { User, getUserByFilter } from "../models/user_models.js";
import { randomUUID } from "crypto";
export const LandingController = (req, res) => {
  res.send("hello");
};

export const UserRegistration = (req, res) => {
  User.find({ isAdmin: true })
    .then((records, err) => {
      if (records.length == 0) {
        res.send("no admin created");
        res.end();
        return;
      }

      const adminId = records[0]._id;

      User.find({ email: req.body.email }).then((record, err) => {
        let user;
        if (record.length == 0) {
          user = new User({
            email: req.body.email,
            name: req.body.name,
            _id: randomUUID(),
            isAdmin: req.body.isAdmin,
            createdOn: Math.floor(Date.now() / 1000),
          });
          user.save();

          const conversation = new Conversation({
            _id: randomUUID(),
            lastMessage: "",
            lastMessageSentOn: 0,
            unReadCount: 0,
            users: [adminId, user._id],
          });

          conversation.save();
        } else {
          user = record[0];
        }
        res.send({ user: user });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ err: err });
    });
};

export const SendMessage = (req, res) => {
  // Conversation.updateOne()
  const message = new Message({
    conversationId: req.body.conversationId,
    _id: randomUUID(),
    body: req.body.body,
    senderId: req.body.senderId,
    recieverId: req.body.recieverId,
    createdOn: Math.floor(Date.now() / 1000),
  });

  message.save();

  Conversation.updateMany(
    { _id: req.body.conversationId },
    {
      $set: {
        lastMessage: req.body.body,
        lastMessageSentOn: Math.floor(Date.now() / 1000),
      },
    }
  ).catch((err) => {
    console.log(err);
  });
  res.end();
};

export const GetConversations = (req, res) => {
  Conversation.find({ users: req.body.userId })
    .then((conversation, err) => {
      res.send({ conversations: conversation });
    })
    .catch((err) => {
      res.status(400).send({ err: err });
    });
};

export const GetMessages = (req, res) => {
  Message.find({ conversationId: req.body.conversationId })
    .then((messages, err) => {
      res.send({ messages: messages });
    })
    .catch((err) => {
      res.status(400).send({ err: err });
    });
};
