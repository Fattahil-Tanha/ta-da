import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { get } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description} = await request.json();
    await connectMongoDb();
    await Topic.create({title, description});
    return NextResponse.json({message: "topic Created", status: 201})
}

export async function GET(){
    await connectMongoDb();
    const topics =  await Topic.find();
    return NextResponse({topics});
}

export async function DELETE(request){
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDb()
        await Topic.findByIdAndDelete(id)
        return NextResponse({message: "Topic Deleted"})
}