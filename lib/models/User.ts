import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  joinedAt: Date;
  isEarlyMember: boolean;
  passwordSetAt: Date | null;
  lastLogin: Date | null;
  accountStatus: "pending" | "active" | "inactive";
  magicLinkToken?: string;
  magicLinkExpiry?: Date;
  tokenUsed?: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    joinedAt: { type: Date, default: Date.now },
    isEarlyMember: { type: Boolean, default: false },
    passwordSetAt: { type: Date, default: null },
    lastLogin: { type: Date, default: null },
    accountStatus: {
      type: String,
      enum: ["pending", "active", "inactive"],
      default: "pending",
    },
    magicLinkToken: { type: String },
    magicLinkExpiry: { type: Date },
    tokenUsed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
