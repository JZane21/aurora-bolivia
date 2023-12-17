import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const InicioPage = () => {
    return (
        <Container maxWidth="sm">
            <QuienesSomos />
            <Mision />
            <Vision />
        </Container>
    );
};
export default InicioPage;

const QuienesSomos = () => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    ¿Quiénes Somos?
                </Typography>
                <Typography variant="body1">
                    En Aurora, liderados por un equipo de ejecutivos experimentados y visionarios, nos dedicamos a la excelencia e innovación tecnológica. Anticipamos tendencias y fomentamos un ambiente de trabajo colaborativo, impulsando el crecimiento sostenible de Aurora con decisiones estratégicas.
                </Typography>
            </CardContent>
        </Card>
    );
};

const Mision = () => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Misión
                </Typography>
                <Typography variant="body1">
                    Nuestra misión en Aurora es dirigir hacia un futuro prometedor, centrando esfuerzos en decisiones estratégicas, desarrollo de cultura corporativa y fomento de la innovación. Nos enfocamos en construir relaciones duraderas, manteniéndonos como líderes en soluciones tecnológicas avanzadas.
                </Typography>
            </CardContent>
        </Card>
    );
};

const Vision = () => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Visión
                </Typography>
                <Typography variant="body1">
                    Aspiramos a posicionar a Aurora como un referente global en la industria tecnológica, adaptándonos a mercados en evolución y enfocándonos en la satisfacción del cliente y la responsabilidad social. Buscamos fomentar un entorno de innovación, integridad y excelencia.
                </Typography>
            </CardContent>
        </Card>
    );
};
