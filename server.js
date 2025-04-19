const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/calculatorDB", { useNewUrlParser: true });

const historySchema = new mongoose.Schema({
    expression: String,
    result: String
});

const History = mongoose.model("History", historySchema);

app.use(express.json());

app.post("/save", async (req, res) => {
    const newHistory = new History(req.body);
    await newHistory.save();
    res.send("Saved!");
});

app.get("/history", async (req, res) => {
    const history = await History.find();
    res.json(history);
});

app.listen(3000, () => console.log("Server running on port 3000"));