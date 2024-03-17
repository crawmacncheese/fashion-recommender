import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
	res.send('test express app');
});

app.listen(PORT, () => {
	console.log('listening on PORT', PORT);
});
