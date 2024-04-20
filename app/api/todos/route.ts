import { connectDB } from "@/lib/mongoDB";
import ToDo from "@/models/ToDo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {todos} = await req.json();
    await connectDB();
   await ToDo.create({todos});
   return NextResponse.json({message:"Todo created"},{status:201})

}
export async function GET(){
    await connectDB();
    const todos = await ToDo.find();
    return NextResponse.json({todos});
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await ToDo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Title Deleted" }, { status: 200 });
}
