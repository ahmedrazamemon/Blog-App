
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
    
{/*   
    <form className="w-3/6 mx-auto">

<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full  mb-6 group">
    <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="fname" value={fname} onChange={(e) => setfname(e.target.value)} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
  </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={con} onChange={(e) => setcon(e.target.value)} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
  </div>

</div>
<button type="button" onClick={() => updateuser()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
*/}

<div className="block  w-full min-h-screen bg-gray-100 ">
<h1 className="text-center text-4xl ">Edit Your Blog Here..</h1>
<form className="w-3/6  mx-auto  pt-16  block">

<div className="block md:grid-cols-2   md:gap-6">
  <div className="relative  z-0 w-full mb-6 group">
    <b>Title</b>
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
  <b>Description</b>
    <input
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
  <b>Image Url</b>
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
<div className="grid md:grid-cols-2 md:gap-6">
  {/* <div className="relative z-0 w-full mb-6 group">
    <b>ImageURL</b>
    <input
      type="text"
      value={con}
      onChange={(e) => setcon(e.target.value)}
      id="floating_phone"
      // style={{width:100+"%"}}
      className="block py-2.5 w-full px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-0 peer"
      placeholder="url"
      
      /> */}
    {/* <label
      htmlFor="floating_phone"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
      Phone number (123-456-7890)
    </label> */}
  {/* </div> */}
</div>
</div>
<button
  type="button"
  onClick={() => updateuser()}
  className="block text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Submit
</button>
</form>
  </div>

    <ToastContainer/> 
     </>
)
}