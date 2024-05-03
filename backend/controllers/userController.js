import User from "../models/userModel.js";

// @desc Auth user and token
// @route POST /api/users/login
// @access public

const authUser = async (req, res) => {
  res.send("auth user");
};

// @desc Auth user and token
// @route POST /api/users
// @access public

const registerUser = async (req, res) => {
  res.send("register user");
};

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access private

const logoutUser = async (req, res) => {
  res.send("logout user");
};

// @desc get user profile
// @route POST /api/users/profile
// @access private

const getUserProfile = async (req, res) => {
  res.send("get user profile");
};

// @desc update user profile
// @route PUT /api/users/profile
// @access private

const updateUserProfile = async (req, res) => {
  res.send("update user profile");
};

// @desc get users
// @route GET /api/users/
// @access private/admin

const getUsers = async (req, res) => {
  res.send("get users");
};

// @desc get user by ID
// @route GET /api/users/:id
// @access private/admin

const getUserByID = async (req, res) => {
  res.send("get user by id");
};

// @desc delete users
// @route DELETE /api/users/:id
// @access private/admin

const deleteUser = async (req, res) => {
  res.send("delete user");
};

// @desc Update user
// @route PUT /api/users/:id
// @access private/admin

const updateUser = async (req, res) => {
  res.send("update user");
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserByID,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
  getUserProfile,
};
