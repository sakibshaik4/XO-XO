const express = require("express");
const { ResultController } = require("../controller");
const { checkSession } = require("../util/sessionCheck");
const resultRouter = express.Router();

resultRouter.get("/get-result", checkSession, ResultController.getResult);
resultRouter.post("/add-result", checkSession, ResultController.addResult);
resultRouter.put("/update-result", checkSession, ResultController.updateResult);
resultRouter.delete("/delete-result", checkSession, ResultController.deleteResult);

module.exports = resultRouter;
