const fastify=require('fastify')({
    logger:true
})
const testCode=require('./controller')
const connectDB=require('./database')

fastify.register(testCode,{prefix:'/api'})
fastify.register(connectDB,{url: 'mongodb://localhost:27017/test_database'})

fastify.listen({port:4000},(err)=>{
    if (err) {
        fastify.log.error(err)
        process.exit(1)
      }else{
    console.log(`server is running`)
      }
})