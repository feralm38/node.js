async function connectToDatabase(user,password) {

    const userDb = process.env.USERDATABASE;
    const passDb = process.env.PASSWORDDATABASE;

    if (user===userDb && password===passDb) {
        console.log(`Conexão com banco de dados DEV estabelecida com usuário ${user}`)
    }else{
        console.log(`Falha na autenticação, não foi possivel conectar ao banco e dados DEV com usuário ${user}`)
    }
    
}

export default connectToDatabase;
