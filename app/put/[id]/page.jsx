
"use client"

import { useState,useEffect,} from "react"
import axios from "axios"
// import Home from "../app/main"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
// import home from ''
export default function edituser({params}){

  const route = useRouter()
    const id =params.id

    let [name,setname] = useState("")
    let [fname,setfname] = useState("")
    let [con,setcon] = useState("")
    // let [edit,setedit] = useState([])



    useEffect(()=>{


    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/api/put/${id}`,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data,"my"));
        setname(response.data.data.name)
        setfname(response.data.data.fname)
        setcon(response.data.data.contact)

      })
      .catch((error) => {
        console.log(error);
      });
      

},[])
const updateuser=()=>{

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/api/put/${id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {

        name:name,
        fname:fname,
        contact:con           

        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Updated", {
          position: "top-right",
          theme: "dark",
        });
        route.push("/Components/myblog")
      })
      .catch((error) => {
        console.log(error);
      });

}
return(


    <>
    
<div className="block  w-full min-h-screen bg-gray-100 ">
<h1 className="text-center text-4xl ">Edit Your Blog Here..</h1>
<form className="w-3/6  mx-auto  pt-16  block">

<div className="block md:grid-cols-2   md:gap-6">
  <div className="relative  z-0 w-full mb-6 group">
    <b className="font-serif">Title</b>
    <input
      type="text"
      name="name"
      value={name}
      onChange={(e) => setname(e.target.value)}
      id="floating_first_name"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0 peer"
      placeholder="Title "
      
    />
  </div>
  {/*  */}
  <div className="relative z-0 w-full mb-6 group">
  <b className="font-serif">Description</b>
    <textarea
    rows={15}
      type="text"
      name="fname"
      value={fname}
      onChange={(e) => setfname(e.target.value)}
      id="floating_last_name"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0 peer"
      placeholder="Description" />
  </div>

  {/*  */}
  <div className="relative z-0 w-full mb-6 group">
  <b className="font-serif">Image Url</b>
    <input
      type="text"
      name="con"
      value={con}
      onChange={(e) => setcon(e.target.value)}
      id="floating_last_name"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0 peer"
      placeholder="Description" />
  </div>

{/*  */}

</div>
<button
  type="button"
  onClick={() => updateuser()}
  className="block  text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Update
</button>
<br />
</form>
  </div>

    <ToastContainer/> 
     </>
)
}