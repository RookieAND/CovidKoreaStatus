import { useState, useEffect } from 'react';
import axios from 'axios';

import { faMagnifyingGlass, faPhone, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import TraigeStyledComponent from '../styles/detail/Traige-style';
import { TitleSection } from '../styles/general/Title.js';

const {
    TraigeLayout,
    TraigeSection,
    TraigeLoadingSection,
    TraigeSidoSelect,
    TraigePageSelect,
    TraigeRoom,
    TraigeRoomOption,
    OptionIcon,
    PageIcon,
} = TraigeStyledComponent;

const Triage = () => {
    const [loading, setLoading] = useState(true);
    const [traigeList, setTraigeList] = useState([]);
    const [traigeSido, setTraigeSido] = useState('경기');
    const [traigePage, setTraigePage] = useState(1);
    // 처음 컴포넌트 렌더링 시, 기본으로 설정된 옵션대로 목록을 읽어옴.
    useEffect(() => {
        const traigeRoomList = async () => {
            let res = await axios({
                method: 'POST',
                url: 'http://localhost:5000/api/traige',
                data: {
                    sido: traigeSido,
                    page: traigePage,
                },
            });
            setTraigeList(res.data);
            setLoading(false);
        };
        traigeRoomList();
    }, [traigeSido, traigePage]);
    return (
        <TraigeLayout>
            <TitleSection>
                <h3>Traige Room List</h3>
                <p>선별 진료소 목록</p>
            </TitleSection>
            <TraigeSidoList setTraigeSido={setTraigeSido} traigeSido={traigeSido} />
            {loading ? <TraigeLoadingSection /> : <TraigeList traigeList={traigeList} setTraigePage={setTraigePage} />}
            <TraigePageList setTraigePage={setTraigePage} traigePage={traigePage} />
        </TraigeLayout>
    );
};

const TraigeSidoList = ({ traigeSido, setTraigeSido }) => {
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
        if (event.target.innerText != traigeSido) {
            setTraigeSido(event.target.innerText);
        }
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

const TraigePageList = ({ setTraigePage, traigePage }) => {
    const clickPage = (event) => {
        const resultPage = traigePage + Number(event.target.id);
        console.log(resultPage);
        if (resultPage > 0 && resultPage < 10) {
            setTraigePage(resultPage);
        }
    };
    return (
        <TraigePageSelect>
            <PageIcon id={-1} icon={faCaretLeft} onClick={clickPage} />
            <p>{traigePage} / 9</p>
            <PageIcon id={1} icon={faCaretRight} onClick={clickPage} />
        </TraigePageSelect>
    );
};

const TraigeList = ({ traigeList, setTraigePage }) => {
    return (
        <TraigeSection>
            {traigeList.map((elm, idx) => (
                <TraigeRoom key={idx}>
                    <h5>{elm.hospitalNm._text}</h5>
                    <p>{elm.hospitalAddr._text}</p>
                    <TraigeRoomOption>
                        <div>
                            <OptionIcon icon={faMagnifyingGlass} fixedWidth />
                            <p>PCR 검사 {elm.medicalDiv._text == 'A' ? '가능' : '불가'}</p>
                        </div>
                        <div>
                            <OptionIcon icon={faPhone} fixedWidth />
                            <p>{elm.hospitalTel._text}</p>
                        </div>
                    </TraigeRoomOption>
                </TraigeRoom>
            ))}
        </TraigeSection>
    );
};

export default Triage;
