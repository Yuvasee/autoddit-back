import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const voteSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: 'User' },
  comment: { type: ObjectId, ref: 'Comment' },
  isUpVote: Boolean
}, { timestamps: true });

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
