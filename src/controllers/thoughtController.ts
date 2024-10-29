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

// Get a single thought by ID
export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new thought
export const createThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: thought._id },
    });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a thought by ID
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought by ID
export const deleteThought = async (req: Request, res: Response) => {
  try {
    await Thought.findByIdAndDelete(req.params.thoughtId);
    res.json({ message: "Thought deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};
