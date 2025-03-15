const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

let db;
const connectDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
connectDB();

// Application routes
app.post('/api/applications', async (req, res) => {
  try {
    const { name, issue, location } = req.body;
    if (!name || !issue || !location) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    const result = await db.collection('applications').insertOne({
      name,
      issue,
      location,
      status: 'Pending',
      createdAt: new Date()
    });
    
    res.status(201).json({ ...req.body, _id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/applications', async (req, res) => {
  try {
    const applications = await db.collection('applications')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/applications/:id', async (req, res) => {
  try {
    const result = await db.collection('applications').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { status: req.body.status } },
      { returnDocument: 'after' }
    );
    
    if (!result.value) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(result.value);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));