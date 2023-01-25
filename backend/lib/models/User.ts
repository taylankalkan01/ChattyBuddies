import mongoose, { Document } from "mongoose";

export interface User extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model<User>("user", userSchema);

export default User;
