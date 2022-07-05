import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';
import convert from 'xml-js';

dotenv.config({ encoding: 'utf8' });

// 환경변수로 허가되지 않은 인증 TLS 통신을 거부하지 않겠다고 설정
// 현재는 .env 파일에 자체적으로 값을 0으로 설정해두었음.
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const BASE_URL = 'https://apis.data.go.kr';
const traigeRouter = express.Router();

// XML 형식으로 받은 api 데이터를 Json 형식으로 변환시켜야 함.
const getTraigeRooms = async (sido, page) => {
    let response;
    try {
        response = await axios({
            method: 'GET',
            url: `${BASE_URL}/${process.env.TRAIGE_ROOM_URL}`,
            params: {
                serviceKey: decodeURIComponent(process.env.TRAIGE_ROOM_SERVICE_KEY),
                pageNo: page,
                numOfRows: 9,
                sido: decodeURIComponent(sido),
            },
        });
    } catch (err) {
        console.log(err);
    }
    // 변환되어 나온 값은 문자열이므로, 이를 Json Object로 한번 더 변환시킴.
    console.log(response.data);
    let res2Json = convert.xml2json(response.data, { compact: true, spaces: 4 });
    res2Json = JSON.parse(res2Json);
    console.log(res2Json.response.body);
    return res2Json.response.body.items.item;
};

traigeRouter.post('/api/traige', async (req, res) => {
    const sido = req.body.sido;
    const page = req.body.page;
    const response = await getTraigeRooms(sido, page);
    return res.send(response);
});

export default traigeRouter;
