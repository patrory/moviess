import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    desc: {
      type: String,
      required: true,
    },
    posterUrl: {
      type: String,
    },
    seat: [
      {
        number: Number,
        userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Movie", MovieSchema);
