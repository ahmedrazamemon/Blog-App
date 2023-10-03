import mongoose from "mongoose"
import { Connectlink } from '../../library/db'
import {product} from "../../library/models/blog"

import {NextResponse} from 'next/server' 

export async function POST(request,content){

    const chk = await request.json()

    await mongoose.connect(Connectlink).then(async(res)=>{
 console.log("post connect") })

    const data1 = product(chk)

    const user = await data1.save()

    return NextResponse.json({
        data:user
    })




}