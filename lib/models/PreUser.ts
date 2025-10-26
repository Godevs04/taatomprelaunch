import mongoose, { Schema, Model } from "mongoose";

export interface IPreUser {
  name: string;
  email: string;
  password: string;
  joinedAt: Date;
}

const PreUserSchema = new Schema<IPreUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const PreUser: Model<IPreUser> =
  mongoose.models.PreUser || mongoose.model<IPreUser>("PreUser", PreUserSchema);

export default PreUser;

