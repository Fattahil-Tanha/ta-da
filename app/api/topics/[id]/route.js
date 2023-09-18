import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: 'updated'})
}

export async function GET(request,{params}){
    const { id } = params;
    await connectMongoDb();
    const topic =  Topic.findOne({_id: id});
    return NextResponse.json(topic)
}