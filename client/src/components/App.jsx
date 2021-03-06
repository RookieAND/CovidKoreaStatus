import { ThemeProvider } from 'styled-components';
import { defalutTheme as theme } from '../styles/Theme.js';
import GlobalStyle from '../styles/GlobalStyle.js';
import Header from './Header.jsx';
import Container from './Container.jsx';
import Footer from './Footer.jsx';

const App = () => {
    return (
        //ThemeProvider는 반드시 theme을 사용 할 하위 Component를 감싸고 있어야 합니다.
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Container />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
