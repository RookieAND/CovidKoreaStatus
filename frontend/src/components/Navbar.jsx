import NavbarStyledComponent from '../styles/detail/Navbar-style';
import { BrowserRouter } from 'react-router-dom';

const { NavbarLayout, NavbarOption } = NavbarStyledComponent;

const Navbar = () => {
    return (
        <NavbarLayout>
            <BrowserRouter>
                <NavbarOption>사용 안내</NavbarOption>
                <NavbarOption>국내 현황</NavbarOption>
                <NavbarOption>세부 지표</NavbarOption>
            </BrowserRouter>
        </NavbarLayout>
    );
};

export default Navbar;
