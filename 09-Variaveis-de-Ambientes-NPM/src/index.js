
import connectToDatabase from "./database/data.js"

async function main() {

    // valor do usuário e senha recuperado do processo    
    const userDb = process.env.USERDATABASE;
    const passDb = process.env.PASSWORDDATABASE;
    
    // Não vai conectar pois usuário e senha estão errados
    await connectToDatabase("kakashi", "hatake")

    // conexão de forma segura sem passar usuário e senha informação recuperada de arquivo de variavel de ambiente .dev
    await connectToDatabase(userDb, passDb);

}

main ();
