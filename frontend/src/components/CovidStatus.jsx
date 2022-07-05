import axios from 'axios';
import CovidStatusStyledComponents from '../styles/detail/CovidStatus-style';
import { useState, useEffect } from 'react';
import { TitleSection } from '../styles/general/Title.js';
import { Chart as ReactChart } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    LineController,
    BarElement,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, BarElement, Tooltip, Legend, PointElement, LineElement);

const { CovidStatusLayout, CovidGraphSection } = CovidStatusStyledComponents;

const CovidStatus = () => {
    return (
        <CovidStatusLayout>
            <TitleSection>
                <h3>Covid Status</h3>
                <p>주간 코로나 확진 현황</p>
            </TitleSection>
            <CovidGraph />
        </CovidStatusLayout>
    );
};

const CovidGraph = () => {
    const [loading, setLoading] = useState(true);
    const [corona, setCorona] = useState([]);
    useEffect(() => {
        const coronaStatus = async () => {
            let res = await axios.get('http://localhost:5000/api/status');
            setCorona(res.data);
            setLoading(false);
        };
        coronaStatus();
    }, []);

    const date = Array.from([...Array(7).keys()], (num) => corona[`mmdd${num + 1}`]);
    const confirmedCases = Array.from([...Array(7).keys()], (num) => corona[`cnt${num + 1}`]);
    const data = {
        labels: date,
        datasets: [
            {
                type: 'bar',
                label: '확진자',
                backgroundColor: 'rgba(0, 102, 176, 0.5)',
                data: confirmedCases,
            },
        ],
    };
    const option = {
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 15,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <CovidGraphSection>
            <h1>금일 코로나 확진자 : {loading ? '- - - - 명' : `${parseInt(corona['cnt7']).toLocaleString()} 명`}</h1>
            {loading ? null : <ReactChart type='line' data={data} options={option} />}
        </CovidGraphSection>
    );
};

export default CovidStatus;