import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Returns = () => {
  const { t } = useTranslation();

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant='h2' color="darkred">{t('returnTitle')}</Typography>
      <br />

      <Typography variant='h3' color="red">{t('returnIntroduction')}</Typography>
      <Typography variant='p'>
        {t('returnIntroductionText')}
      </Typography>
      <br /><br />
    </Box>
  )
}

export default Returns;