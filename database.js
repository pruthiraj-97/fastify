const mongoose=require('mongoose')
async function connectDB(fastify,options){
     try {
        mongoose.connect(options.url)
        console.log("MongoDB Connected");
     } catch (error) {
        console.log("error in db connect");
     }
}

module.exports=connectDB