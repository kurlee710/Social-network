import User from "../models/User.js";
import Thought from "../models/Thought.js";
import { Request, Response } from "express";

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate("friends thoughts");
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "friends thoughts"
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a user and their thoughts
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    await Thought.deleteMany({ _id: { $in: user?.thoughts } });
    res.json({ message: "User and associated thoughts deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a friend
export const addFriend = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a friend
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
