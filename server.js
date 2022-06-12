import express from 'express';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send('API running')
})

app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`));