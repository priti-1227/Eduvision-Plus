import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            // component="footer"
            sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: 'primary.main',
                color: 'white',
            }}
        >
            <Typography variant="body2">
                © 2024 EduVision+. All rights reserved. |{' '}
                <Link href="/privacy" color="inherit">
                    Privacy Policy
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
