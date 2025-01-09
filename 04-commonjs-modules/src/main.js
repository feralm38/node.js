

// Solicita conteudo de outro arquivo desde que ele tenha sido exportado
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database")

// Importando funções especificas
const{getFullName,productType,getProductLabel} = require ("./services/products")
// Quando imortada especificas pode chamar a função diretamente pelo nome
getFullName("1","Notebook")

async function main() {
  console.log("carrinho compras:");
  
  // Funções importadas
  products.getFullName("1", "teclado")  
  products.getFullName("2", "Mouse")
  products.getProductLabel("Mouse PAD")

  // Constantes importadas
  console.log(config.devArea.production);
  console.log(config.client.device);
  console.log(products.productType.version);
  database.connectDataBase("Prod")
  database.disconectDataBase("Prod")
}

main();