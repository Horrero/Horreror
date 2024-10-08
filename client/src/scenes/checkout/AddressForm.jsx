import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";
import { useTranslation } from "react-i18next";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { t } = useTranslation();

  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label={t('firstName')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('lastName')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('country')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{
          gridColumn: "span 4",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('streetAddress')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('streetAddress2')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('city')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label={t('zipCode')}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        sx={{
          gridColumn: "span 2",
          "& .MuiInputBase-input": {
            backgroundColor: "white",
            color: "black",
          },
          "& .MuiFormLabel-root": {
            color: "#41494F",
          },
          "& .Mui-error": {
            color: "white",
          },
        }}
      />
    </Box>
  );
};

export default AddressForm;