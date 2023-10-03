"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Navbar from "../Blog/navbar";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import "../../globals.css"
// import { useRouter } from "next/router";
// import edituser from './'
export default function Blogs() {
  let [user, showuser] = useState([]);
  const route = useRouter();
  //   let [name,setname] = useState("")
  // let [fname,setfname] = useState("")
  // const [show, setshow] = useState([]);
  // let [con,setcon] = useState("")

  let uid = localStorage.getItem("userid");
  let username = localStorage.getItem("username");
  console.log(uid);

  useEffect(() => {
    // const axios = require('axios');

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/alldata/${uid}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        //   alert(response.data.message)
        showuser(response.data.data);
        //   console.log(showuser)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const initialValues = {
    name: "",
    fname: "",
    contact: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Title is required"),
    fname: Yup.string().required("Description is required"),
    contact: Yup.string().required("Text is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    let Name = localStorage.getItem("username");
    let userid = localStorage.getItem("userid");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: values.name,
        fname: values.fname,
        contact: values.contact,
        useruid: userid,
        names: Name,
      },
    
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Published", {
          theme: "light",
          position: "top-right",
        });
        resetForm();
        window.location.reload();
         // Reset the form after successful submission
        // fetchInitialData(); // Fetch updated data after submission
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delete1 = (e) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/put/${e}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Deleted", {
          theme: "dark",
          position: "top-right",
        });
        window.location.reload();
        // fetchInitialData(); // Fetch updated data after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      {/* <img style={{backgroundAttachment:""}} src={"https://cdn.xxl.thumbs.canstockphoto.com/personal-blog-sign-on-a-table-personal-blog-sign-on-a-wooden-indoor-table-pictures_csp35052183.jpg"} alt="" /> */}
      <Navbar />
      {/* <h1>My Blogs</h1> */}
      <div>
        <div className="flex justify-center border-2 border-gray-950 sm: bg-blue-400">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32"
            src={
              "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar11-512.png"
            }
            alt=""
          />
          <h1 className=" md: mt-10 text-3xl  text-white font-serif">
            Hello <b>{username.toUpperCase()}</b> Your blogs are here..
          </h1>
        </div>
      </div>

      <div className="mx-auto block w-1/2 mt-8 bg-gray-800 border-2 p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="container mx-auto px-4">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-white text-xl font-serif font-bold mb-2"
                >
                  Title
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 leading-tight"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-yellow-200 text-sm mt-1"
                />
              </div>

              <div className="text-xl mb-6">
                <label
                  htmlFor="fname"
                  className="block text-white text-xl font-serif font-bold mb-2"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  rows={8}
                  id="fname"
                  name="fname"
                  className="w-full border rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 leading-tight resize-none"
                />
                <ErrorMessage
                  name="fname"
                  component="div"
                  className="text-yellow-200 text-sm mt-1"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact"
                  className="block text-white text-xl font-serif font-bold mb-2"
                >
                  Image URL
                </label>
                <Field
                  as="textarea"
                  id="contact"
                  name="contact"
                  className="w-full  border rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 leading-tight resize-none"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="text-yellow-200 text-sm mt-1"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-slate-700 mx-auto block  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Publish
            </button>
          </Form>
        </Formik>
        <br />
      </div>
<br />
      <h1 className="text-5xl mb-4  text-center font-serif">
    My Blogs
      </h1>
      <div className="relative overflow-x-auto">
        {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"> */}
        {/* ... Rest of your table code */}

        {/* <tbody> */}
        {
        
        user.length == 0 ? (
          <b>No Post</b>
        ) : (
          user.map((v, i) => {
            return (
              <>
                <div className="w-4/5  p-3 mb-3 mx-auto">
                  <div className="border-2 w-full h-full bg-slate-50 rounded shadow-lg p-4 mx-auto">
                    <span className="flex justify-between">
                       <h2 className="text-3xl border-b-2 mb-4 font-serif"> {v.name}</h2>
                      <span>
                      <button
                      type="button"
                      onClick={() => route.push(`/put/${v._id}`)}
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => delete1(v._id)}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      <AiFillDelete />
                    </button>
               
                      </span>
                      
                    </span>
                    <span className="mt-4">
                      <div className=" sm:flex md:flex">
                      <h3 className="text-justify p-3 mx-4">
                        {v.fname}   
                      </h3>
                      <img src={v.contact}  className="w-28 h-28" alt="Blog Image" />
                      </div>
                     
                    </span>
                    <div className="text-gray-600 text-base flex justify-between space-x-3 mt-4 border-t-2">
                      <img
                        className="w-4 h-4 mt-1"
                        src={
                          "https://w7.pngwing.com/pngs/140/830/png-transparent-like-logo-facebook-like-button-facebook-like-button-computer-icons-like-miscellaneous-blue-text-thumbnail.png"
                        }
                        alt=""
                      />
                      {/* <h3>{v.names}</h3> */}
                      <h5>Comments</h5>
                    </div>
                  </div>
                </div>
             
              </>
            );
          })
        )}
        {/* </tbody> */}
        {/* </table> */}
      </div>
      <ToastContainer />
    </div>
  );
}
