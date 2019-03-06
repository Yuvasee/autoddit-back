import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const linkSchema = new mongoose.Schema({
  title: String,
  image: String,
  user: { type: ObjectId, ref: 'User' },
  comments: [{ type: ObjectId, ref: 'Comment' }]
}, { timestamps: true });

const Link = mongoose.model('Link', linkSchema);

export default Link;
