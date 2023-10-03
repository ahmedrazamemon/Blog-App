"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
// import Blogs from './Components/myblog'

export default function Home() {
  const route = useRouter();
  const [show, setshow] = useState([]);
  const [userdata, setuser] = useState({
    name: "",
    fname: "",
    contact: "",
  });

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = () => {
    axios
      .get("http://localhost:3000/api/get")
      .then((response) => {
        console.log(response.data);
        setshow(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  let username = localStorage.getItem("username");
  const handleSubmit = (values, { resetForm }) => {
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
        resetForm(); // Reset the form after successful submission
        // fetchInitialData(); // Fetch updated data after submission
        window.location.reload();

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
          theme: "light",
          position: "top-right",
        });
        fetchInitialData(); // Fetch updated data after deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-xl font-bold">Blog.Com</a>

          <div>
            <button className="text-white hover:text-gray-400 bg-blue-500 p-1 mr-2 rounded">
              {" "}
              <Link href={"/Components/myblog"}>My Blogs</Link>{" "}
            </button>
            <a className="text-white hover:text-gray-400 bg-blue-500 p-1.5 rounded">
              {" "}
              <Link href={"/"}>Logout</Link>{" "}
            </a>
          </div>
        </div>
      </nav>

      {/* <h1 className="text-5xl mb-2 text-center">My Blogs </h1> */}
      <div className="relative mt-9 overflow-x-auto">
        {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"> */}
        {/* ... Rest of your table code */}

        {/* <tbody> */}
        {show.length == 0 ? (
          // <b>loading</b>
          <img
            className="block w-10 h-10 mt-10 mx-auto"
            src={"https://i.gifer.com/ZKZg.gif"}
            alt=""
          />
        ) : (
          show.map((v, i) => {
            return (
              <>
                <div className="w-4/5  p-3 mb-3 mx-auto">
                  <div className="border-2 w-full h-full bg-slate-50 rounded shadow-lg p-4 mx-auto">
                    <span>
                       <h2 className="text-3xl border-b-2 mb-4 font-serif"> {v.name}</h2>
                       
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
                {/* <p>n</p> */}

                {/* <div className="bg-slate-200 block h-fit"> */}

                {/* <div className="borer-2 border-black"> 
                      
                      <h1 className="text-center font-serif">{v.name}</h1>
                      <p className="text-center font-serif">{v.fname}</p>
                      <img className="w-10 block mx-auto h-10" src={v.contact} alt="" />

                      </div> */}
                {/* </div> */}

                {/* <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {i + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {v.name}
                    </th>
                    <td className="px-6 py-4">{v.fname}</td>
                    <td className="px-6 py-4"> <img src={v.contact} className="w-18 h-16" alt="" /> </td>
                    <td className="px-6 py-4">
                      {/* <button
                        type="button"
                        onClick={() => route.push(`/put/${v._id}`)}
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={(e) => delete1(v._id)}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Delete
                      </button> */}
                {/* </td> */}
                {/* </tr> */}
              </>
            );
          })
        )}
        {/* </tbody> */}
        {/* </table> */}
      </div>
      <ToastContainer />
    </>
  );
}

// Rest of your code...
