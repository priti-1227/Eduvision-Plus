import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Home: React.FC = () => {
    return (
       <><Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography variant="h3" gutterBottom>
                Welcome to EduVision+
            </Typography>
            <Typography variant="body1" paragraph>
                Simplify your learning experience with AI-powered tools for note organization and summarization.
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
            </Box>
            </>
    );
};

export default Home;
