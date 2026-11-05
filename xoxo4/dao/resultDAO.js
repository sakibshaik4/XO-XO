const { Result } = require("../model");

const addResult = async (data) => {
  try {
    return await Result.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getResult = async (query) => {
  try {
    return await Result.find(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateResult = async (query, updateData) => {
  try {
    return await Result.findOneAndUpdate(query, updateData, {
      new: true,
    }).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteResult = async (query) => {
  try {
    return await Result.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addResult, getResult, updateResult, deleteResult };
