import mongoose, { Schema, Model } from "mongoose";

export interface IPreUser {
  name: string;
  username: string;
  email: string;
  password: string | null; // null for prelaunch users, set when they create password
  joinedAt: Date;
  isEarlyMember: boolean; // true for all prelaunch signups
}

const PreUserSchema = new Schema<IPreUser>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    match: /^[a-z0-9_]+$/, // Only lowercase letters, numbers, and underscores
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: null, // null for prelaunch users
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
  isEarlyMember: {
    type: Boolean,
    default: true, // All prelaunch signups are early members
    required: true,
  },
});

const PreUser: Model<IPreUser> =
  mongoose.models.PreUser || mongoose.model<IPreUser>("PreUser", PreUserSchema);

export default PreUser;

