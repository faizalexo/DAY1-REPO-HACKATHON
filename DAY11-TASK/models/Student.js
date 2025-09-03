import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 1 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  enrolledDate: { type: Date, default: Date.now }
});

export default mongoose.model('Student', studentSchema);
