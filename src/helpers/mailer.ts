import nodemailer from 'nodemailer'
import User from '@/models/userModel';
import bcrypt from 'bcrypt';

export const sendEmail = async ({email, emailType, userId}:any)=>{
    try {
        // create a hased token
        const hasedToken = await bcrypt.hash(userId.toString(), 10)
    } catch (error:any) {
        throw new Error(error.message);
    }
}
