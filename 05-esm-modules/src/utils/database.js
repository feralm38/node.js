async function connectToDatabase(nomeBanco) {
    // logica de conexão
    console.log(`Conectado ao banco: ${nomeBanco}`)    
}

async function disconectDatabase(nomeBanco) {
    console.log(`Desconectado do banco ${nomeBanco}`)    
}

const dataBaseType = {
    userType:"admin",
    typeData:"datalocal",
}


// export por padrão para função em ESM
export default connectToDatabase;

// Export funçãos
export {disconectDatabase, connectToDatabase, dataBaseType};
