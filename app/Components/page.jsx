"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use next/router instead of next/navigation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sheader from "./Sheader";
export default function Signin() {
  const route = useRouter();

  const Submitdata = (values) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Password: values.Password,
        Email: values.Email,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.message == "No User Found") {
          toast.error(response.data.message, {
            theme: "light",
            position: "top-center",
          });
        }
        // toast.error(response.data.message, {
        //   position: "top-center",
        //   theme: "dark",
        // });

        let username = response.data.data.Name;
        // alert(response.data.message);
        if (response.data.message == "Userlogin") {
          toast.success(response.data.message, {
            position: "top-center",
            theme: "dark",
          });
          let userid = response.data.data._id;
          route.push("/Components/Blog");
          localStorage.setItem("userid", userid);
          // console.log(response.data.data)
          localStorage.setItem("username", username);
        }
      })
      .catch((error) => {
        console.log(error);
        // route.push("/");
      });
  };

  const initialValues = {
    Email: "",
    Password: "",
  };

  const validationSchema = Yup.object({
    Email: Yup.string().email("Invalid email address").required(),
    Password: Yup.string().min(3, "Minimum 10 Characters").required(),
  });

  return (
    <Container>
      <Sheader />
      <Typography variant="h4" className="text-center" gutterBottom>
        Sign In
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Submitdata(values);
        }}
      >
        <Form>
          <Field
            as={TextField}
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email"
            name="Email"
            type="text"
          />
          <ErrorMessage name="Email" component="div" />

          <Field
            as={TextField}
            fullWidth
            variant="outlined"
            margin="normal"
            label="Password"
            name="Password"
            type="password"
          />
          <ErrorMessage name="Password" component="div" />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className=" bg-blue-500 p-1 mr-2 rounded"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <ToastContainer />
    </Container>
  );
}
