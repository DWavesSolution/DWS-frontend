"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
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
import { ToastContainer, toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import { FormValidation } from "@/app/validations/validation";
import emailjs from "@emailjs/browser";

const ConatctUs = () => {
  const [services, setServices] = useState("");
  const handleChange = (value: string) => {
    setServices(value);
  };
  const form: any = useRef();
  const formsubmission = async (values: any, { resetForm }: any) => {
    try {
      await emailjs.sendForm(
        "service_wee4me4",
        "template_sn0x5q2",
        form.current,
        "ZZlCJusFiMDe4w61_"
      );
      toast.success("Your Message has been Sent");
      resetForm();
    } catch (error) {
      toast.error("There is some Issue while send your Message");
    }
  };
  return (
    <Box sx={styles.MainBox}>
      <Grid container>
        <Grid item xs={12} lg={5.7}>
          <Card sx={styles.ImageCard}>
            <CardMedia sx={styles.CardMedia} image={"/contact-bg.png"}>
              <Grid container item xs={11} lg={6.5} sx={styles.ImageContainer}>
                <Grid item xs={12} sx={{ marginBottom: "42px" }}>
                  <Typography fontFamily={"var(--nunito)"} fontSize={"18.5px"}>
                    Lets built the next big thing!
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontSize={"48px"}
                    lineHeight={"50px"}
                    fontFamily={"var(--work-Sans)"}
                  >
                    {"Have a project? Let’s connect"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    {"Send your details and we’ll get in touch"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Expect a response within 24 hours.
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    {"We’re open to signing an NDA, if needed."}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"14px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Engage directly with our product experts, not account
                    managers
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "40px" }}>
                  <Typography
                    fontFamily={"var(--nunito)"}
                    fontSize={"12px"}
                    sx={{ color: "#a5bcd5" }}
                  >
                    Reach out to us at
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={styles.TextMargin}>
                  <Typography fontFamily={"var(--nunito)"} fontSize={"20px"}>
                    <Link
                      href={"mailto:Info@digitalwavesolutions.ca"}
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      Info@digitalwavesolutions.ca
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontFamily={"var(--nunito)"}>
                    +1 (647) 236 2627
                  </Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6.3} sx={styles.ContactMainGrid}>
          <Container>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={11} sm={10.5}>
                <Typography
                  fontFamily={"var(--nunito)"}
                  fontSize={"28px"}
                  fontWeight={700}
                  sx={{
                    marginBottom: "32px",
                  }}
                >
                  {"Contact us"}
                </Typography>
              </Grid>
              <Grid item xs={11} sm={10.5}>
                <Formik
                  initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    services: "",
                    message: "",
                  }}
                  validationSchema={FormValidation}
                  onSubmit={formsubmission}
                  dirty={true}
                  isValid={true}
                >
                  {({ values, errors, touched, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} ref={form}>
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
                          name="services"
                          value={services}
                          label="Services"
                          onChange={(event) => handleChange(event.target.value)}
                          required
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
                        sx={styles.Button}
                        onClick={() => handleSubmit()}
                        value="Send"
                      >
                        <Typography
                          fontFamily={"var(--nunito)"}
                          fontSize={"12px"}
                        >
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConatctUs;
