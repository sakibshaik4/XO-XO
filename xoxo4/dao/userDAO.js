const { User } = require("../model");

const addUser = async (data) => {
  try {
    return await User.create(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getUser = async (query) => {
  try {
    return await User.find(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const updateUser = async (query, updateData) => {
  try {
    return await User.findOneAndUpdate(query, updateData, { new: true }).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const deleteUser = async (query) => {
  try {
    return await User.findOneAndDelete(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
const getSingleUser = async (query) => {
  try {
    return await User.findOne(query).exec();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { addUser, getUser, updateUser, deleteUser, getSingleUser };
