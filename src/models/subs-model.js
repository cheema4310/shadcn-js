import mongoose, { Schema } from 'mongoose';

const SubscribersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
  unSubscibed: {
    required: true,
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Subscribers ||
  mongoose.model('Subscribers', SubscribersSchema);
