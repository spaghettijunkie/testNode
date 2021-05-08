const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const express = require('express')

const app = express();

const Member = require("./Member")
const members = require("./members")

const PORT = 8080;
const IP = "192.168.0.20";

app.get('/', (req, res) => {
	res.status(200).send({
		test: '1'
	});
});

app.get('/IPS', (req, res) => {
	for (i = 1; i < 254; i++) {

	}
	res.status(200).send(
	);
});

app.get("/members", (req, res) => res.json(members));

app.get("/members/:id", (req, res) => res.json(members.filter(member => member.id == req.params.id)));

app.put('/new-file', (req, res) => {
	res.status(500).send("WIP");
}
);

app.listen(PORT, '0.0.0.0', () => console.log(`Server started at ${IP}:${PORT}`));
