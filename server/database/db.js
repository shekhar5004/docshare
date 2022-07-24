import mongoose  from "mongoose";


const Connection = async () =>{
    const URL="mongodb+srv://newUser1:shashank20195004@cluster0.nfqfcm3.mongodb.net/?retryWrites=true&w=majority";
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
       console.log('Database connexted successfully');
    }
    catch(error){
      console.log('Error while connecting to the database',error);
    }
}
export default Connection;