// Tipando uma função caso o retorno não seja uma string conforme espcificado a função
// ja apresentara um erro antes mesmo de compilar

async function getBaseEmail(senderName:string):Promise<string> {
    let base = await getHeaderText();
    base += `\n Olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\n estou deixando meu curriculo"    
    return base;     
}

async function getHeaderText():Promise<string>{
    return ("Email para você")        
}

// Exportar a função para o arquivo principal
export {getBaseEmail};