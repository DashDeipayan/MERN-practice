const express = require("express");
const notes = require("./data/notes");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.get("/notes", (req, res) => {
	res.json(notes);
});

app.get("/notes/:id", (req, res) => {
	const note = notes.find((note) => note._id === req.params.id);
	res.json(note);
});

app.listen(4000);
