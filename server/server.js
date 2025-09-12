import express from "express";
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./configs/db.js";

const app = express();
await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => {
  res.send("api is working")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app is listening on port: http://localhost:${PORT}`)
})

export default app;