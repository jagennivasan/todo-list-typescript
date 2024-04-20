import mongoose, { Schema } from "mongoose";

const toDoSchema = new Schema(
  {
    todos: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.models.ToDo || mongoose.model("ToDo", toDoSchema);

export default ToDo;
