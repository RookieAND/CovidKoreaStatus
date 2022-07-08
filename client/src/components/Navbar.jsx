import NavbarStyledComponent from '../styles/detail/Navbar-style';

const { NavbarLayout, NavbarOption } = NavbarStyledComponent;

const Navbar = () => {
    return (
        <NavbarLayout>
            <NavbarOption>사용 안내</NavbarOption>
            <NavbarOption>국내 현황</NavbarOption>
            <NavbarOption>세부 지표</NavbarOption>
        </NavbarLayout>
    );
};

export default Navbar;
