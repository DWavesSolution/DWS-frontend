"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { DropDownServices } from "@/app/static-data/data";
import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import { FormValidation } from "@/app/validations/validation";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [services, setServices] = useState("");
  const handleChange = (event: any) => {
    setServices(event.target.value as string);
  };
  const form: any = useRef();
  const submitHandler = () => {};
  const formsubmission = async (values: any) => {
    try {
      await emailjs.sendForm(
        "service_wee4me4",
        "template_sn0x5q2",
        form.current,
        "ZZlCJusFiMDe4w61_"
      );
      toast.success("Your Message has been Sent");
    } catch (error) {
      toast.error("There is some Issue while send your Message");
    }
  };
  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Grid container id="contact" sx={styles.ContainerGrid}>
          <Grid item xs={12} sm={5.9}>
            <Typography
              fontSize={"44px"}
              lineHeight={"50px"}
              fontFamily={"var(--work-Sans)"}
              sx={{
                marginBottom: "32px",
                width: { xs: "100%", md: "70%", lg: "60%" },
              }}
            >
              {"Have a project? Let's discuss"}
            </Typography>
            <Typography
              fontSize={"14px"}
              fontFamily={"var(--nunito)"}
              sx={{
                marginBottom: "48px",
                width: { xs: "100%", sm: "65%", lg: "50%" },
              }}
            >
              Once you submit this form, expect to hear back from us within 24
              hours.
            </Typography>
            <Divider
              sx={{
                backgroundColor: "#FA8162",
                margin: "30px 0px",
                width: { xs: "100%", sm: "95%", md: "65%" },
              }}
            />
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"28px"}
              fontWeight={600}
              sx={{ marginBottom: "16px" }}
            >
              Or Reach us directly at
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"18px"}
              fontWeight={600}
            >
              <Link
                href={"mailto:Info@digitalwavesolutions.ca"}
                sx={{
                  color: "#FF6741",
                  textDecoration: "none",
                  textDecorationLine: "underline",
                }}
              >
                Info@digitalwavesolutions.ca
              </Link>
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"18px"}
              fontWeight={600}
              sx={{ color: "#FF6741" }}
            >
              +1 (647) 236 2627
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5.9} sx={{ marginTop: { xs: "20px" } }}>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                services: "",
                message: "",
              }}
              validationSchema={FormValidation}
              onSubmit={submitHandler}
              dirty={true}
              isValid={true}
              sx={{ width: "100%" }}
            >
              {({ values, errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit} ref={form}>
                  <Grid container sx={styles.InputGrid}>
                    <Grid item xs={5.8}>
                      <Field
                        as={TextField}
                        type="text"
                        name="name"
                        label="Name"
                        placeholder="Name"
                        required
                        value={values?.name}
                        error={touched?.name && Boolean(errors?.name)}
                        helperText={touched?.name && errors?.name}
                        fullWidth
                        sx={styles.TextField}
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <Field
                        as={TextField}
                        type="text"
                        name="phone"
                        label="Phone"
                        placeholder="Phone"
                        required
                        value={values?.phone}
                        error={touched?.phone && Boolean(errors?.phone)}
                        helperText={touched?.phone && errors?.phone}
                        fullWidth
                        sx={styles.TextField}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={styles.InputGrid}>
                    <Grid item xs={5.8}>
                      <Field
                        as={TextField}
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        required
                        value={values?.email}
                        error={touched?.email && Boolean(errors?.email)}
                        helperText={touched?.email && errors?.email}
                        fullWidth
                        sx={styles.TextField}
                      />
                    </Grid>
                    <Grid item xs={5.8}>
                      <FormControl fullWidth sx={styles.TextField}>
                        <InputLabel>Services</InputLabel>
                        <Select
                          name="services"
                          value={services}
                          label="Services"
                          required
                          onChange={handleChange}
                          error={touched?.services && Boolean(errors?.services)}
                        >
                          {DropDownServices.map((item: any, index: any) => {
                            return (
                              <MenuItem
                                value={item.value}
                                key={`${item.value}-${index}`}
                              >
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Field
                    as={TextField}
                    type="text"
                    name="message"
                    label="Message"
                    placeholder="Message"
                    required
                    value={values?.message}
                    error={touched?.message && Boolean(errors?.message)}
                    helperText={touched?.message && errors?.message}
                    fullWidth
                    sx={styles.TextField}
                    multiline
                    rows={5}
                  />
                  <Button
                    sx={{
                      ...styles.Button,
                      background: "#fe7958",
                      "&:hover": {
                        background: "#fe7958",
                      },
                      "&:disabled": {
                        opacity: 0.4,
                        color: "white",
                      },
                    }}
                    onClick={formsubmission}
                    value="Send"
                    disabled={
                      Object.keys(errors).length > 0 ||
                      !(
                        values.name &&
                        values.email &&
                        values.phone &&
                        values.message
                      )
                    }
                  >
                    <Typography fontFamily={"var(--nunito)"} fontSize={"12px"}>
                      Submit
                    </Typography>
                  </Button>
                  <ToastContainer />
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
