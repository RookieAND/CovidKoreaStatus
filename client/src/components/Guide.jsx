import GuideStyledComponents from '../styles/detail/Guide-style';
import { TitleSection } from '../styles/general/Title.js';
import { faMagnifyingGlass, faMap, faTableColumns } from '@fortawesome/free-solid-svg-icons';

const { GuideLayout, GuideLine, GuideElement, GuideElementIcon } = GuideStyledComponents;

const guideElement = [
    {
        title: '빠른 탐색',
        desc: '쉽고 빠르게 선별 진료소 탐색',
        icon: faMagnifyingGlass,
    },
    {
        title: '감염자 현황',
        desc: '그래프로 일간 감염자 안내',
        icon: faMap,
    },
    {
        title: '실시간 목록',
        desc: '진료소 목록 실시간 업데이트',
        icon: faTableColumns,
    },
];

function Guide() {
    return (
        <GuideLayout>
            <TitleSection>
                <h3>Information</h3>
                <p>웹 서비스 소개</p>
            </TitleSection>
            <GuideLine>
                {guideElement.map((element, idx) => (
                    <GuideOption key={idx} title={element.title} desc={element.desc} icon={element.icon} />
                ))}
            </GuideLine>
        </GuideLayout>
    );
}

function GuideOption({ title, desc, icon }) {
    return (
        <GuideElement>
            <GuideElementIcon icon={icon} fixedWidth />
            <h5>{title}</h5>
            <p>{desc}</p>
        </GuideElement>
    );
}

export default Guide;
