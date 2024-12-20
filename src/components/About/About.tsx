import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                About EduVision+
            </Typography>
            <Typography variant="body1">
                EduVision+ is an AI-powered platform designed to simplify your learning experience by managing lecture notes and generating summaries seamlessly.
            </Typography>
        </Container>
    );
};

export default About;
