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
                },
            });
            setTraigeList(res.data);
            setTraigePage(1);
            setLoading(false);
        };
        traigeRoomList();
    }, [traigeSido]);
    return (
        <TraigeLayout>
            <TitleSection>
                <h3>Traige Room List</h3>
                <p>선별 진료소 목록</p>
            </TitleSection>
            <TraigeSidoList setTraigeSido={setTraigeSido} traigeSido={traigeSido} setLoading={setLoading} />
            {loading ? (
                <TraigeLoadingSection>
                    <div className='loader'></div>
                    <p>자료를 불러오고 있습니다. 잠시만 기다려주세요...</p>
                </TraigeLoadingSection>
            ) : (
                <div>
                    <TraigeList traigeList={traigeList} traigePage={traigePage} />
                    <TraigePageList
                        setTraigePage={setTraigePage}
                        traigePage={traigePage}
                        traigeAmount={traigeList.length}
                    />
                </div>
            )}
        </TraigeLayout>
    );
};

const TraigeSidoList = ({ traigeSido, setTraigeSido, setLoading }) => {
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
            setLoading(true);
        }
    };
    return (
        <TraigeSidoSelect>
            {sido.map((elm) => (
                <li key={elm} onClick={clickSidoOption} className={traigeSido == elm ? 'selected' : null}>
                    {elm}
                </li>
            ))}
        </TraigeSidoSelect>
    );
};

const TraigePageList = ({ setTraigePage, traigePage, traigeAmount }) => {
    const MaxPage = parseInt(traigeAmount / 9) + (traigeAmount % 9 > 0 ? 1 : 0);
    const clickPage = (event) => {
        const resultPage = traigePage + Number(event.target.id);
        if (resultPage > 0 && resultPage <= MaxPage) {
            setTraigePage(resultPage);
        }
    };
    return (
        <TraigePageSelect>
            <PageIcon id={-1} icon={faCaretLeft} onClick={clickPage} className={traigePage > 1 ? 'on' : 'off'} />
            <p>
                {traigePage} / {MaxPage}
            </p>
            <PageIcon id={1} icon={faCaretRight} onClick={clickPage} className={traigePage >= MaxPage ? 'off' : 'on'} />
        </TraigePageSelect>
    );
};

const TraigeList = ({ traigeList, traigePage }) => {
    const currentTraigePage = traigeList.slice((traigePage - 1) * 9, traigePage * 9);
    return (
        <TraigeSection>
            {currentTraigePage.map((elm, idx) => (
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
