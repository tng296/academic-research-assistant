import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
const port = process.env.PORT || 3001;

import messageProcess from './services/messageProcess.js';

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/api', async (req, res) => {
    const messages = req.body.message;
    try {
        const response = await messageProcess(messages);
        const content = response.content;
        res.json({ content });
    } catch (err) {
        res.status(500).json({ response: "Error processing message" });
    }
});