const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = 'mongodb://localhost:27017';
const dbName = 'SportsCentral'; // Match the case exactly with your existing database

app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to handle form submissions and store in MongoDB
app.post('/api/contact', async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db(dbName);
    const contacts = db.collection('contacts');
    const { name, email, message } = req.body;
    await contacts.insertOne({ name, email, message });
    client.close();
    res.status(200).send('Message stored successfully!');
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).send('Error storing data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
