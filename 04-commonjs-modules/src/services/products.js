// Todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log("productX: " + codeId + "--" + productName);
    await dobreakLine(); 

  }

async function getProductLabel(productName) {
  console.log("Product: " + productName);
}

const productType = {
  version: "digital",
  tax: "x1",
}



// hidden function só faz sentido neste arquivo não deve ser exportado
// Função para Quebra de linha
async function dobreakLine() {
  console.log("\n")  
}

const apiURL = {
   url: "www.google.com/api",
};



// Modulo exporte tudo que estiver dentro deste escopo será exportado
module.exports = {
  getFullName, 
  getProductLabel, 
  productType, 
};