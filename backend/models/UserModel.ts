import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  interests: string[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  interests: { type: [String], defaults: [] },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

module.exports = UserModel;
