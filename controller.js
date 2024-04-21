const userSchema=require('./model')
async function testCode(fastify,options) {
    fastify.route({
        method:'POST',
        url:'/user/register',
        handler: async(req,res)=>{
            const {name,age}=req.body
            const user=await userSchema.create({
                 name,
                 age:parseInt(age)
            })
            return {
                user
            }
        }
    })
    
    fastify.route({
        method:'GET',
        url:'/user',
        handler:async(req,res)=>{
           const users=await userSchema.find()
           return {
            users:users
           }
        }
    })
}

module.exports=testCode