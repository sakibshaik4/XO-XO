const express = require("express");
const { UserController } = require("../controller");
const { checkSession } = require("../util/sessionCheck");
const userRouter = express.Router();

userRouter.get("/get-user", checkSession, UserController.getUser);
userRouter.post("/add-user", UserController.addUser);
userRouter.put("/update-user", checkSession, UserController.updateUser);
userRouter.delete("/delete-user", checkSession, UserController.deleteUser);
userRouter.post("/login", UserController.login);
module.exports = userRouter;
