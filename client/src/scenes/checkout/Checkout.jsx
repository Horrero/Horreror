import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useTranslation } from "react-i18next";

const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

const stripePromise = loadStripe(
  "pk_live_51QEzsaC2jsCWWcVjhLgNCmpM8HjUri85DqxEU6UlObMiMAKzI4KonKaZcn8XfvRgKcLB3Nv2hozurBV9xXBJ7uiJ00ftFa4xRb"
);

const initialValues = {
  cashOnDelivery: false,
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: (yup) => yup.required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const { t } = useTranslation();

  useEffect(() => {
    if (cart.length === 0) {
      document.location.href = "/";
    }
  }, [cart]);

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // Copying the billing address to the shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  const makePayment = async (values) => {
    if (cart.length === 0) {
      return document.location.href = "/";
    }

    let stripe = false;
    if(!values.cashOnDelivery) {
      stripe = await stripePromise;
    }

    const requestBody = {
      userName: `${values.billingAddress.firstName} ${values.billingAddress.lastName}`,
      cashOnDelivery: values.cashOnDelivery,
      email: values.email,
      phoneNumber: values.phoneNumber,
      products: cart.map(({ id, size, count }) => ({
        id,
        size,
        count,
      })),
      billingInformation: values.billingAddress,
      isSameAddress: values.shippingAddress.isSameAddress,
      shippingInformation: values.shippingAddress,
      // dev: localStorage.getItem("dev") === "true",
    };

    try {
      // Send request to create Stripe session on the backend
      const response = await axios.post(URL + "/api/orders", requestBody);
      
      if(!response.data) {
        return console.error("No response from the server");
      }

      if(values.cashOnDelivery) {
        return document.location.href = "/checkout/success";
      }

      if(!response.data.id) {
        return console.error("Invalide response from the server");
      }
      
      const session = await response.data;
      
      // Redirect to Stripe for payment
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      document.location.href = "/checkout/cancel";
      console.error("Error processing payment", error);
    }
  };

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      boxShadow: "none",
                      color: "black",
                      borderRadius: 0,
                      padding: "15px 40px",
                      "&:hover": {
                      backgroundColor: "gray",
                      },
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    {t('back')}
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                    "&:hover": {
                    backgroundColor: "red",
                    }
                  }}
                >
                  {!isSecondStep ? t('next') : t('placeOrder')}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;