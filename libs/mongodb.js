import mongoose from "mongoose";

    const connectMongoDb = async () =>{
    try { 
        const uri = process.env.mongo-uri;
      await mongoose.connect(uri)
       console.log("connected db successful")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDb;