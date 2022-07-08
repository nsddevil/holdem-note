import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email for this User."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password for this User."],
  },
  image: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
