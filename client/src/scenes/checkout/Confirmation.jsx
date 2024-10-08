import { Box, Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";

const Confirmation = () => {
  const { t } = useTranslation();

  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>{t('success')}</AlertTitle>
        {t("successfullOrder")} -{" "}
        <strong>{t("congrats")}</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
