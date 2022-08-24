require("dotenv").config();
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/api/v1/tasks", tasks);

const PORT = 5000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();