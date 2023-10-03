import { Userslist } from '@/app/library/Models/data'
import { Connectlink } from '../../library/db'
import mongoose from 'mongoose'
import {NextResponse} from 'next/server'
export async function POST(request,Content){

    let data = await request.json()
await mongoose.connect(Connectlink).then((val)=>{

    console.log("connected")
})
    let chkdata = await Userslist.findOne(data)
    console.log("chk")
    if(chkdata!=null){
        if(chkdata.Password==data.Password){
            return NextResponse.json({
                message:"Userlogin",
                data:chkdata
            })
        }
        else{

            return NextResponse.json({
                message:"Incorrect password",
                data:[]
            })
        }
       
    }

    else{

        return NextResponse.json({

            message:"No User Found"
        })
    }
    // await mongoose.connect(Connectlink).then((res)=>{

    //     console.log("signin connected")
    // })

    // return NextResponse.json({

    //     message:"signin"
    // })

}

