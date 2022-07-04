import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import covidStatusRouter from './api/covidStatus.js';
import traigeRouter from './api/traigeRoom.js';

dotenv.config({ encoding: 'utf8' });

const app = express();
const port = process.env.PORT || 5000;

// CORS Header를 추가하여 CORS 통신을 가능하게 한다.
// Web Application 간의 송신을 가능하게끔 열어주는 목적.
app.use(cors());

// Router를 통해 API 를 분리시켜 관리함.
app.get('/api/status', covidStatusRouter);
app.get('/api/traige', traigeRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example Express server with ${port}`);
});
