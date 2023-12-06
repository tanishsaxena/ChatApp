import {
  GetConversations,
  GetMessages,
  LandingController,
  SendMessage,
  UserRegistration,
} from "./controller/controller.js";
import ExtractMetadata from "./middlewares/MetaDataExtractor.js";

export const PrepareRoutes = (router) => {

  router.get("/", [ExtractMetadata.extractor], (req, res) => {
    LandingController(req, res);
  });

  router.post(
    "/user/register",
    [
      ExtractMetadata.extractor,
      (req, res, next) => new UserRegistration(req, res, next),
    ],
    (req, res) => {
      UserRegistration(req, res);
    }
  );

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
