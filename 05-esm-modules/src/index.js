
// importar em ESM
// importar a função connectToDatabase do arquivo (modulo) database.js (Necessário espcificar extensão do arquivo)
// arquivos podem ser .js ou .mjs (Arquivo de modulo para ser exportado não se deve programar nada)
import connectToDatabase from "./utils/database.js";

// Assim que importado as função do modulo já ficam disponiveis para uso
connectToDatabase("dbProd")

//-------------------//

// importar todas as funções disponiveis dando instanciando como database
import * as database from "./utils/database.js";
// Assim que importado as função do modulo já ficam disponiveis para uso
database.connectToDatabase("dbProd");
database.disconectDatabase("dbProd");

//-------------------//

// Importar funções especificas (entre as chaves control + espaço)
import {disconectDatabase, dataBaseType} from "./utils/database.js";
// Desta forma pode executar a função diretamente
disconectDatabase("dbprod");
console.log(`tipo de conexão: ${dataBaseType.typeData} `)

import {getDatabaseFromApi} from "./utils/api.js"
getDatabaseFromApi();