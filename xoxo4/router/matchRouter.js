const express = require("express");
const { MatchController } = require("../controller");
const { checkSession } = require("../util/sessionCheck");
const matchRouter = express.Router();

matchRouter.get("/get-match",checkSession, MatchController.getMatch);
matchRouter.post("/add-match",checkSession, MatchController.addMatch);
matchRouter.put("/update-match",checkSession, MatchController.updateMatch);
matchRouter.delete("/delete-match",checkSession, MatchController.deleteMatch);

module.exports = matchRouter;
