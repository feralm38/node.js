
// export default função exportada por padrão
// coolocar exports. nome da função = (parametro) =>
// para que função seja asincrona necessa´rio colocar a propriedade async após =
exports.connectDataBase = async (dataName) => {
  console.log("Se conectando ao banco: " + dataName)  
};

exports.disconectDataBase = async (dataName) => {
  // logica
  console.log("Desconectando banco de dados: " + dataName)  
};

