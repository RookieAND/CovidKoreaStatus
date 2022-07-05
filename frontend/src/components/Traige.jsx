import { useState, useEffect } from 'react';
import axios from 'axios';

import { faMagnifyingGlass, faHospital, faPhone } from '@fortawesome/free-solid-svg-icons';
import TraigeStyledComponent from '../styles/detail/Traige-style';
import { TitleSection } from '../styles/general/Title.js';

const {
    TraigeLayout,
    TraigeSection,
    TraigeLoadingSection,
    TraigeSidoSelect,
    TraigeRoom,
    TraigeRoomOption,
    TraigeRoomOptionIcon,
} = TraigeStyledComponent;

const Triage = () => {
    return (
        <TraigeLayout>
            <TitleSection>
                <h3>Traige Room List</h3>
                <p>선별 진료소 목록</p>
            </TitleSection>
            <TraigeSidoList />
            <TraigeList />
        </TraigeLayout>
    );
};

const TraigeSidoList = () => {
    const [traigeSido, setTraigeSido] = useState('경기');
    const sido = [
        '서울',
        '경기',
        '강원',
        '충북',
        '충남',
        '경북',
        '경남',
        '전북',
        '전남',
        '인천',
        '대전',
        '부산',
        '광주',
        '대구',
        '울산',
        '제주',
    ];
    const clickSidoOption = (event) => {
        setTraigeSido(event.target.value);
    };
    return (
        <TraigeSidoSelect>
            {sido.map((elm) => (
                <li key={elm} onClick={clickSidoOption}>
                    {elm}
                </li>
            ))}
        </TraigeSidoSelect>
    );
};

const TraigeList = () => {
    const [loading, setLoading] = useState(true);
    const [traigeList, setTraigeList] = useState([]);
    const [traigePage, setTraigePage] = useState(1);
    // 처음 컴포넌트 렌더링 시, 기본으로 설정된 옵션대로 목록을 읽어옴.
    useEffect(() => {
        const traigeRoomList = async () => {
            let res = await axios.get('http://localhost:5000/api/traige');
            setTraigeList(res.data);
            setLoading(false);
        };
        traigeRoomList();
    }, []);

    return (
        <TraigeSection>
            {loading ? (
                <TraigeLoadingSection />
            ) : (
                traigeList.map((elm, idx) => (
                    <TraigeRoom key={idx}>
                        <h5>{elm.hospitalNm._text}</h5>
                        <p>{elm.hospitalAddr._text}</p>
                        <TraigeRoomOption>
                            <TraigeRoomOptionIcon icon={faMagnifyingGlass} fixedWidth />
                            <TraigeRoomOptionIcon icon={faHospital} fixedWidth />
                            <TraigeRoomOptionIcon icon={faPhone} fixedWidth />
                        </TraigeRoomOption>
                    </TraigeRoom>
                ))
            )}
        </TraigeSection>
    );
};

export default Triage;
