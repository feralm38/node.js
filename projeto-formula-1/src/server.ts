import fastify from "fastify";
import cors from "@fastify/cors"
import { request } from "node:https";

interface DriverParams{
    id: string
}


const server = fastify({logger:true})

// Cors limita acesso a api, * permite acesso de qualquer site
server.register(cors,{origin:"*"});


const teams = [
    {id:1,name: "Maclaren",base: "Woking, United Kingdom"},
    {id:2,name: "Mercedes",base: "Brackley, United Kingdom"},
    {id:2,name: "Red Bull racing",base: "Milton keynes, United Kingdom"}
]

const drivers = [
    {id:1, name: "Max Vestapen", team: "Red Bull Racing"},
    {id:1, name: "Lewis Hamilton", team: "Ferrari"},
    {id:1, name: "Lando Norris", team: "Maclaren"},
]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)
    return {teams}
})

server.get("/drivers", async(request, response) =>{
    response.type("application/json").code(200)
    return { drivers}
})

server.get<{Params:DriverParams}>("/driver/:id", async(request, response) =>{
    response.type("application/json").code(200)
    const id = parseInt(request.params.id)
    const driver = drivers.find(d => d.id === id)

    if (!driver){
        response.type("application/json").code(404)
        return {message:"Driver Not Found"}
    }else{
        response.type("application/json").code(200)
        return {driver}
    }


})

server.listen({port:3333}, () =>{
    console.log("Server init")
})



