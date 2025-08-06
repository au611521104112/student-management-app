const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send();
});

app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

app.put('/students/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
