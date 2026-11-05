const { Match } = require("../model");

const addMatch = async (data) => {
  try {
    return await Match.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getMatch = async (query) => {
  try {
    return await Match.find(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateMatch = async (query, updateData) => {
  try {
    return await Match.findOneAndUpdate(query, updateData, {
      new: true,
    }).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteMatch = async (query) => {
  try {
    return await Match.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addMatch, getMatch, updateMatch, deleteMatch };
