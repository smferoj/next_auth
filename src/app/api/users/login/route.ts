import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;
       const user = await User.findOne({email});
       if(!user){
        return NextResponse.json({error:"User deom not exist"}, {status:400})
       }
       const validPassword = await bcrypt.compare(password, user.password)
       if(!validPassword){
        return NextResponse.json({error:"Invalid password"}, {status:400})
       }
      
       
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}