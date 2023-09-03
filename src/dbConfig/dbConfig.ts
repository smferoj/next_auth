import mongoose from 'mongoose';

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("DB connected successfully")
        })

        connection.on('error', (err)=>{
            console.log("DB connected error" + err);
            process.exit();
        })
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}