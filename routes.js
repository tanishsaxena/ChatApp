import {
  GetConversations,
  GetMessages,
  LandingController,
  SendMessage,
  UserRegistration,
} from "./controller/controller.js";

export const PrepareRoutes = (router) => {
  router.get("/", (req, res) => {
    LandingController(req, res);
  });

  router.post("/user/register", (req, res) => {
    UserRegistration(req, res);
  });

  router.post("/message/send", (req, res) => {
    SendMessage(req, res);
  });

  router.get("/messages", (req, res) => {
    GetMessages(req, res);
  });

  router.get("/conversations", (req, res) => {
    GetConversations(req, res);
  });
};
