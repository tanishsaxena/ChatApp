const { Message } = require("../models/messages_model");
const { customFormatErrorFn } = require("../util/Common");

class MessageController {
  static async SendMessage({ req, res }) {
    try {
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
        throw err;
      });

      res.status(200).send({ status: 200, message: "Success", data: response });
    } catch (error) {
      const errorObj = customFormatErrorFn(error, null);
      res.status(500).json({ status: 500, error: errorObj });
    }
  }
}

exports = module.exports = MessageController;
