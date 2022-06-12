import express from 'express';
import connectDB from './config/db.js';
import usersRoute from './routes/api/users.js'
import postsRoute from './routes/api/posts.js'
import authRoute from "./routes/api/auth.js";
import profileRoute from "./routes/api/profile.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send('API running')
})

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);

app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`));