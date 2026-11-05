const { MatchDAO } = require("../dao");

const addMatch = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Match added successfully",
      data: await MatchDAO.addMatch(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getMatch = async (req, res, next) => {
  try {
    let query = { ...req?.query };
    delete query.apiKey
    res.json({
      success: true,
      message: "Match read successfully",
      data: await MatchDAO.getMatch(query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateMatch = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Match updated successfully",
      data: await MatchDAO.updateMatch(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteMatch = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Match deleted successfully",
      data: await MatchDAO.deleteMatch(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = { addMatch, getMatch, updateMatch, deleteMatch };
