import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	console.log(req.query);
	res.json({message: 'test d\'éclat app'});
});

app.listen(PORT, () => {
	console.log('listening on PORT', PORT);
});
