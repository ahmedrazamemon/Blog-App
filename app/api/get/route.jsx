import mongoose from 'mongoose'
import {NextResponse} from 'next/server'
import { Connectlink } from '../../library/db'
import {product} from "../../library/models/blog"


export async function GET(){


    await mongoose.connect(Connectlink).then(async(res)=>{

        console.log("get db connected")
    })


const data1 = await product.find()


    return NextResponse.json({
        data:data1,
        status:200

    })



}



