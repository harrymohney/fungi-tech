const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const growSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      min: 0,
      required: true,
    },
    substrate: {
      type: String,
      required: true,
    },
    yield: {
      type: Number,
      min: 0,
      required: true,
    },
    notes: {
      type: String,
      required: false,
  },
    entryId: {
      type: String,
    },
  //   workout: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Workout",
  // },
  },
  {
    timestamps: true,
  }
);
const Grow = mongoose.model('Grow', growSchema)

module.export = Grow;