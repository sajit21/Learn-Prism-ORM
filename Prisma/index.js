import { PrismaClient } from "./generated/prisma/index.js";

const prisma= new PrismaClient();





const main= async () =>{

    //create user
    // const user=await prisma.user.create({
    //     data:{
    //         name:"roahn",
    //         email:"rohanmhr@gmail.com"
    //     }
    // })

    // const manyuser=await prisma.user.createMany({
    //     data:[
    //         {name:"ram", email:"ram12@gmail.com"},
    //         {name:"hari",email:"hari@gmail.com"}
    //     ]
    // })

    //getusers
    // const GetUser=await prisma.user.findMany();
    
    //singleid
    const GetUserbyid= await prisma.user.findUnique({ where: {id:5}})
    console.log(GetUserbyid)
}

main()
.catch((e)=>console.error(e))
.finally(async()=>{
    await prisma.$disconnect()
})