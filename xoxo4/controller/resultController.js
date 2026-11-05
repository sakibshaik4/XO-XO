const { ResultDAO } = require("../dao");

const addResult = async (req, res, next) => {
  try {
    console.log("test");
    res.json({
      success: true,
      message: "Result added successfully",
      data: await ResultDAO.addResult(req.body),
    });
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getResult = async (req, res, next) => {
  try {
    let query = { ...req?.query };
    delete query.apiKey
    res.json({
      success: true,
      message: "Result read successfully",
      data: await ResultDAO.getResult(query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateResult = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Result updated successfully",
      data: await ResultDAO.updateResult(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteResult = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Result deleted successfully",
      data: await ResultDAO.deleteResult(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = { addResult, getResult, updateResult, deleteResult };
