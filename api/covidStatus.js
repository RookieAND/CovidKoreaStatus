import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ encoding: 'utf8' });

// 환경변수로 허가되지 않은 인증 TLS 통신을 거부하지 않겠다고 설정
// 현재는 .env 파일에 자체적으로 값을 0으로 설정해두었음.
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const BASE_URL = 'https://apis.data.go.kr';
const covidStatusRouter = express.Router();

const getCovidStatus = async (request) => {
    let response;
    try {
        response = await axios({
            method: 'GET',
            url: `${BASE_URL}/${process.env.COVID_STATUS_URL}`,
            params: {
                serviceKey: decodeURIComponent(process.env.COVID_STATUS_SERVICE_KEY),
            },
        });
    } catch (err) {
        console.log(err);
    }
    return response.data.response.result[0];
};

covidStatusRouter.get('/api/status', async (req, res) => {
    const response = await getCovidStatus(req);
    return res.json(response);
});

export default covidStatusRouter;
