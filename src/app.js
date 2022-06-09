import express from "express";
import { v4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/tasksArray", (req, res) => {
    res.json([]);
});

app.get("/tasksObject", (req, res) => {
    res.json({ tasks: [] });
});

app.post("/tasks", (req, res) => {
    res.json([]);
});

app.post("/tasksJsonBody", (req, res) => {
    const { title, description } = req.body;
    res.json({
        title, description, id: v4()
    });
})

app.post("/tasksJsonBodyEmpty", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.sendStatus(400)
    res.json({
        title, description, id: v4()
    });
})

export default app;