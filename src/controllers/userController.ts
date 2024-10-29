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
