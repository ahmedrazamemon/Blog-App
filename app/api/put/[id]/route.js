// import { dbconnect } from "../../../library/db"
import {NextResponse} from 'next/server'
import { Connectlink } from '../../../library/db'
import {product} from "../../../library/models/blog"
import mongoose from "mongoose";
// import { product } from "../../../library/models/data";
export async function PUT(request,content){

const data = await request.json()

const id = content.params.id;
await mongoose.connect(Connectlink).then(async(res)=>{

console.log("put connected")

})

const filter ={_id:id}

const result = await product.findOneAndUpdate(filter,data)
    return NextResponse.json({

        data:result,
        status:200

    })
}

export async function GET(request,content){
    const id = content.params.id;
    await mongoose.connect(Connectlink).then(async(res)=>{

        console.log("dynmic get connected")
        
        })
        const filter ={_id:id}

        const user=await product.findOne(filter)



    return NextResponse.json({

        data:user
    })
}

export async function DELETE(request,content){

    const id = content.params.id

    await mongoose.connect(Connectlink).then(async(res)=>{

        console.log("delete api connected")
        
        })
        const filter ={_id:id}

        const result = await product.deleteOne(filter)

return NextResponse.json({

    data:result,
    message:"done"

})

}