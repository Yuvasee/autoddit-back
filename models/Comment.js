import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
  title: String,
  image: String,
  user: { type: ObjectId, ref: 'User' },
  parent: this,
  comments: [this],
  votes: [{ type: ObjectId, ref: 'Vote' }]
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
