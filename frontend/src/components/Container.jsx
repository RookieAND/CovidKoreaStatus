import ContainerLayout from '../styles/detail/Container-style';
import Guide from './Guide.jsx';
import CovidStatus from './CovidStatus.jsx';
import Triage from './Traige.jsx';

const Container = () => {
    return (
        <ContainerLayout>
            <Guide />
            <CovidStatus />
            <Triage />
        </ContainerLayout>
    );
};

export default Container;
