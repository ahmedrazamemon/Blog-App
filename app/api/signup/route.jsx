import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Connectlink } from "../../library/db";
import { Userslist } from "../../library/models/data";

export async function POST(request, content) {
  const data = await request.json();

  await mongoose.connect(Connectlink).then((res) => {
    console.log("Post Api connected");
  });

  const result = Userslist(data);
  const user = await result.save();

  return NextResponse.json({
    message: user,
  });
}
