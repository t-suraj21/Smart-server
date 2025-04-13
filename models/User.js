const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  courses: [
    {
      title: String,
      progress: Number,
    },
  ],
  tests: [
    {
      subject: String,
      score: Number,
      total: Number,
    },
  ],
  exams: [
    {
      subject: String,
      date: String,
    },
  ],
  quizzes: [
    {
      topic: String,
      date: String,
    },
  ],
  attendance: [
    {
      subject: String,
      percentage: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);