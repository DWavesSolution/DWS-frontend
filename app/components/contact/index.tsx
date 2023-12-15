"use client";
import {
  Box,
  Button,
  Container,
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

const ContactUs = () => {
  const [services, setServices] = useState("");
  const handleChange = (event: any) => {
    setServices(event.target.value as string);
  };
  const [submitform, setSubmitForm] = useState(true);
  const ref = useRef();
  const submitHandler = () => {};
  const formsubmission = (e: any) => {
    setSubmitForm(false);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2y5c7s5",
        "template_k8u5oum",
        // ref.current,
        "eE9W4Thiy_5GA_B4N"
      )
      .then(
        (result) => {
          console.log("success", result.text);
        },
        (error) => {
          console.log("Faild...", error.text);
        }
      );
  };
  return (
    <Box sx={styles.MainBox} data-aos="fade-up" data-aos-duration={3000}>
      <Container>
        <Grid
          container
          id="contact"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={11} sm={7} lg={7}>
            <Typography
              fontSize={"44px"}
              lineHeight={"50px"}
              fontFamily={"var(--work-Sans)"}
              sx={{
                color: "#004ca2",
                marginBottom: "32px",
                width: { xs: "100%", md: "70%", lg: "50%" },
              }}
            >
              {"Have a project? Let's discuss"}
            </Typography>
            <Typography
              fontSize={"14px"}
              fontFamily={"var(--nunito)"}
              sx={{
                marginBottom: "48px",
                width: { xs: "100%", sm: "65%", lg: "40%" },
              }}
            >
              Once you submit this form, expect to hear back from us within 24
              hours.
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"14px"}
              sx={{ marginBottom: "16px" }}
            >
              Reach Us At
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"20px"}
              fontWeight={700}
            >
              <Link
                href={"mailto:Info@digitalwavesolutions.ca"}
                sx={{ color: "black", textDecoration: "none" }}
              >
                Info@digitalwavesolutions.ca
              </Link>
            </Typography>
            <Typography
              fontFamily={"var(--nunito)"}
              fontSize={"22px"}
              fontWeight={700}
            >
              +1 (647) 374 5600
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} lg={5}>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                massage: "",
              }}
              validationSchema={FormValidation}
              onSubmit={submitHandler}
              dirty={true}
              isValid={true}
            >
              {({ values, errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
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
                  <FormControl fullWidth sx={styles.TextField}>
                    <InputLabel>Services</InputLabel>
                    <Select
                      value={services}
                      label="Services"
                      onChange={handleChange}
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
                  <Field
                    as={TextField}
                    type="text"
                    name="massage"
                    label="Massage"
                    placeholder="Massage"
                    required
                    value={values?.massage}
                    error={touched?.massage && Boolean(errors?.massage)}
                    helperText={touched?.massage && errors?.massage}
                    fullWidth
                    sx={styles.TextField}
                  />
                  <Button
                    sx={styles.Button}
                    onClick={formsubmission}
                    value="Send"
                  >
                    <Typography fontFamily={"var(--nunito)"} fontSize={"12px"}>
                      Submit
                    </Typography>
                  </Button>
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
