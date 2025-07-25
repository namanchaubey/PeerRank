import mongoose from 'mongoose';

const codeSubmissionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
  submittedBy: {
    type: String, //
    required: true,
  },
  reviews: [
    {
      reviewer: String, // In future: change to ObjectId referencing User
      comments: String,
      score: Number, // e.g., 1-10
    },
  ],
  averageScore: {//
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CodeSubmission = mongoose.model('CodeSubmission', codeSubmissionSchema);
export default CodeSubmission;
