import { Box, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useTranslation } from "react-i18next";

const Payment = ({ values, touched, errors, handleBlur, handleChange, setFieldValue }) => {
  const { t } = useTranslation();

  const handlePaymentChange = (event) => {
    const selectedPayment = event.target.value;
    setFieldValue("cashOnDelivery", selectedPayment === "cash");
  };

  return (
    <Box m="30px 0" sx={{ backgroundColor: "black" }}>
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px", color: "#FFFFFF" }} fontSize="18px">
          <span style={{ color: "#FFFFFF" }}>{t('contactInfo')}</span>
        </Typography>
        <TextField
          fullWidth
          type="text"
          label={<span style={{ color: "#FFFFFF" }}>{t('email')}</span>}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
          InputProps={{ style: { color: "#FFFFFF", borderColor: "#FFFFFF" } }}
          InputLabelProps={{ style: { color: "#FFFFFF" } }}
        />
        <TextField
          fullWidth
          type="text"
          label={<span style={{ color: "#FFFFFF" }}>{t('phoneNumber')}</span>}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
          InputProps={{ style: { color: "#FFFFFF", borderColor: "#FFFFFF" } }}
          InputLabelProps={{ style: { color: "#FFFFFF" } }}
        />
      </Box>

      {/* PAYMENT METHOD */}
      <Box mt="20px">
        <FormControl component="fieldset" sx={{ color: "#FFFFFF" }}>
          <FormLabel component="legend" sx={{ color: "#FFFFFF" }}>
            <span style={{ color: "#FFFFFF" }}>{t('selectPaymentMethod')}</span>
          </FormLabel>
          <RadioGroup
            aria-label="payment method"
            name="paymentMethod"
            value={values.cashOnDelivery ? "cash" : "card"}
            onChange={handlePaymentChange}
          >
            <FormControlLabel
              value="card"
              control={<Radio sx={{ color: "#FFFFFF" }} />}
              label={<span style={{ color: "#FFFFFF" }}>{t('card')}</span>}
            />
            <FormControlLabel
              value="cash"
              control={<Radio sx={{ color: "#FFFFFF" }} />}
              label={<span style={{ color: "#FFFFFF" }}>{t('cashOnDelivery')}</span>}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Payment;