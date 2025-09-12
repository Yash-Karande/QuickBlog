import mongoose from "mongoose";
import mogoose, { connect } from "mongoose";


const connectDB =async ()=>{
    try {
        mogoose.connection.on('connected',()=>console.log
        ("Database Connected")
    )
        await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
    } catch (error) {
        console.log(error.message);
    }
}
export default connectDB;
