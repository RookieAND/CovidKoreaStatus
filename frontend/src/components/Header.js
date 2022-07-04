import HeaderStyledComponents from '../styles/detail/Header-style';
import Navbar from '../components/Navbar.js';

const { HeaderLayout, Background, HeaderTitle } = HeaderStyledComponents;

const Header = () => {
    return (
        <HeaderLayout>
            <Navbar />
            <Background>
                <HeaderTitle>
                    <h1>CovidKoreaStatus</h1>
                    <p>한국 코로나 확진자 현황</p>
                </HeaderTitle>
            </Background>
        </HeaderLayout>
    );
};

export default Header;
