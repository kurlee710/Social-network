import { Schema, model, type Document } from "mongoose";
import reactionSchema from "./Reaction.js";

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: (typeof reactionSchema)[];
}
