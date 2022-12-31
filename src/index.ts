import express from 'express';
const app = express();

app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 3000;

// _ means that the variable is not used
app.get("/ping", (_req, res) => {
    console.log("someone ping here");
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
