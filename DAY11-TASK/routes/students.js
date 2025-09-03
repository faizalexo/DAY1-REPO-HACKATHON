import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    if (!name || !age || !email) return res.status(400).json({ message: 'Missing fields' });

    const exists = await Student.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Email exists' });

    const student = new Student({ name, age, email });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ enrolledDate: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Not found' });

    if (email && email !== student.email) {
      const emailExists = await Student.findOne({ email });
      if (emailExists) return res.status(409).json({ message: 'Email exists' });
    }

    student.name = name || student.name;
    student.age = age || student.age;
    student.email = email || student.email;

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
