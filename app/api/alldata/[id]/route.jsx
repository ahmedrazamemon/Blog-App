import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {Connectlink} from "../../../library/db"
import {product} from '../../../library/models/blog'
// import {users} from "../../../lib/model/user"
export async function GET(request,content) {
    console.log(content.params.useruid)

    await mongoose.connect(Connectlink).then((val) => {
        console.log("test connect")
    })

    let checkuser = await  product.find({ useruid: content.params.id })

    console.log(checkuser)

    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            message: "Data Received"
        })

    }
    else{
        return NextResponse.json({
            data:[],
            message: "Not added any Data!"
        })
    }
}


export async function PUT(request,content){
    const id = content.params.useruid
   const  body =await request.json()

    await mongoose.connect(Connectlink).then((val) => {
        console.log("test connect")
    })
    const filter = {_id:id}
    const res = await product.findOneAndUpdate(filter,body)

    return NextResponse.json({
data:res
    })

}


export async function DELETE(request,content){
    const id = content.params.useruid
    await mongoose.connect(Connectlink).then((val) => {
        console.log("test connect")
    })
    const filter = {_id:id}
    const res = await product.deleteOne(filter)

  
    return NextResponse.json({
        data:res
    })
}