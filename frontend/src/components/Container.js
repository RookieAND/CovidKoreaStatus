import ContainerLayout from '../styles/detail/Container-style';
import Guide from './Guide.js';
import CovidStatus from './CovidStatus.js';
import Triage from './Traige.js';

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
