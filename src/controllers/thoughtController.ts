import Thought from "../models/Thought.js";
import User from "../models/User.js";
import { Request, Response } from "express";

// Get all thoughts
export const getThoughts = async (_: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};
