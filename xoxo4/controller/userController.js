const { UserDAO } = require("../dao");

const addUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User added successfully",
      data: await UserDAO.addUser(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    let query = { ...req?.query };
    delete query.apiKey
    res.json({
      success: true,
      message: "User read successfully",
      data: await UserDAO.getUser(query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User updated successfully",
      data: await UserDAO.updateUser(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User deleted successfully",
      data: await UserDAO.deleteUser(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    let { phone, password } = req?.body;
    if (!phone || !password) {
      return res.json({ success: false, message: "missing credentials!" });
    }
    let userData = await UserDAO.getSingleUser({ phone, password });
    if (userData) {
      req.session.user = userData;
    }
    res.json({
      success: userData ? true : false,
      message: userData ? "Authenticated successfully" : "Invalid Credentials",
      data: userData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = { addUser, getUser, updateUser, deleteUser, login };
