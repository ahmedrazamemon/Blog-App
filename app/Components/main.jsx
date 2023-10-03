"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Container, Link } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css"

export default function Signup() {
  const initialValues = {
    Name: "",
    Email: "",
    Password: "",
    Number: "",
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    Password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    Number: Yup.string().required("Phone number is required"),
  });

  const onSubmit = (values) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Name: values.Name,
        Number: values.Number,
        Password: values.Password,
        Email: values.Email,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Account Created", {
          position: "top-center",
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="">
      <Typography variant="h4" className="text-center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={formik.handleSubmit} className="w-3/6 mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Name"
            name="Name"
            type="text"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
          />

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email"
            name="Email"
            type="email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Phone Number"
            name="Number"
            type="tel"
            value={formik.values.Number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Number && Boolean(formik.errors.Number)}
            helperText={formik.touched.Number && formik.errors.Number}
            placeholder="123-456-7890"
          />

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Password"
            name="Password"
            type="password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
          />
        </div>

        <Button
          className="bg-blue-600"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign Up
        </Button>

        {/* <Typography variant="body2" align="center" gutterBottom>
          Already have an account? <Link href="../Components">Sign In</Link>
        </Typography> */}
      </form>
      <ToastContainer />
    </Container>
  );
}
