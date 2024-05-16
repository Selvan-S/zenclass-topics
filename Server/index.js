import dotenv from "dotenv";
import express from "express";
import { dbConnection } from "./db.js";
import { Users } from "./models/users.js";
import { postsRouter } from "./routes/posts.js";

// configuring Environmental variables
dotenv.config();

// Setting PORT
const PORT = process.env.PORT;

// Initializing DB
dbConnection();

// Initializiing Express Server
const app = express();

// Middlewares
app.use(express.json());

// Routes intialization

app.use("/api/posts", postsRouter);

// Activating and listening server
app.listen(PORT, () => {
  console.log(`Server started in PORT : ${PORT}
    listening in http://localhost:${PORT}`);
});

app.post("/signup", async (req, res) => {
  const newUser = await new Users({ ...req.body }).save();
  if (!newUser) {
    return res.json({ error: "Error adding new user" });
  }
  res.status(201).json({ data: newUser, message: "saved successfully" });
});
