import React from 'react';

import {
    Container,
} from './styles';

import PageHeader from '../../Components/PageHeader';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <PageHeader title="Proffys disponíveis" />
        </Container>
    );
}

export default TeacherList;