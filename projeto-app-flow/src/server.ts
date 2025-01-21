
import * as http from "http";
import { app } from "./app";

// recupera porta do arquivo de parmetrização .env
const port = process.env.PORT;

//Criar um servidor passando parametros request e response tipados na função importada app
const server = http.createServer(app)

// Escutando a porta definida difinida noa quirvo parametrização .env
server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
});



