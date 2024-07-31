import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
