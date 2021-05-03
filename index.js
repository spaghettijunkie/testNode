const http = require('http');
const https = require('https');
const express = require('express')
const app = express();
const PORT = 8080;

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

app.listen(PORT, '0.0.0.0');
