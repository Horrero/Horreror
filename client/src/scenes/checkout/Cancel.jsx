import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Cancel = () => {
    const { t } = useTranslation();

    const handleRetry = () => {
        document.location.href = "/";
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h4" style={{fontSize: "32px", marginBottom: "0", color: "red"}} gutterBottom>
                {t("oopsError")}
            </Typography>
            <Typography variant="body1" style={{fontSize: "26px", marginBottom: "12px"}} gutterBottom>
                {t("pleaseTryAgainLater")}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRetry}>
                {t("home")}
            </Button>
        </Box>
    );
};

export default Cancel;