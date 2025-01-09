// Index é a apgina principal onde se concentrar as ações do usuário
// Quais ações usuário pode fazer ?
// Casos de uso, para cada caso de ser criada uma função
// Assinatura dos metodos mapear todas as acões.

// Cria um array para armazenar os itens do carrinho
const myCart = [];

// Cria um array para armazenar lista de desejos
const myWhishList = []


// Ao acessar seá exibida msg de boa vindas ao seu corrinho da shopee
console.log("Welcome to the your Shopee Cart!");

// Importando apenas uma função especifica padrão ESM especificar a extensão do arquivo
import createItem from "./services/item.js";

// Itens que serem adcionados ao carrinho Array Mycart ou lista de desejos Array myWhishList
// chamar a função importada passando os parametros e armazenar retorno em uma variavel constante
// casas decimais no java script é sempre ponto 10.99
// await aespera isso terminar para seguir, por padrão o java script executa tudo ao mesmo tempo 
// para que console.log exiba o valor corretamente é preciso aguarda a linha item2 ser executada, 
// para que o await funcine né necessário utilizar o sync na função de origem.
const item1 = await createItem("hotwheels ferrai","20.99","7");
const item2 = await createItem("hotwheels lamborghini", "39.99","3")
const item3 = await createItem("hotwheels Honda Civic", "19.99","3")
const item4 = await createItem("hotwheels Chevett Retro", "7.11","2")
const item5 = await createItem("hotwheels Camaro Amarelo", "43.12","2")

// teste de retorno da função
console.log(item2.subtotal());

// Importando todas as função exportadas no modulo (cart.js)
// Necessário estanciar para um variavel no caso cartService serviço de carrinho
import * as cartService from "./services/cart.js"

// Executa a função através da varivel instanciada passando o parametros
// await espera isso terminar para seguir, por padrão o java script executa tudo ao mesmo tempo 
// A função add item adicina um item a um array item1 e item2 é valor da constante declaradas acima
await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);
await cartService.addItem(myCart,item3);
await cartService.addItem(myCart,item4);

await cartService.displayCart(myCart);

// Aproveitando o codigo para adiconar a lista de desejos alterando parametro o array para myWhishList
await cartService.addItem(myWhishList,item5);

// Remover item do carrinho
// await cartService.deleteItem(myCart,item3);

//Uso de JSON.stringify: Se quiser a lista como uma string JSON formatada
console.log(`\nLista de desejos: ${JSON.stringify(myWhishList, null, 2)} \n`);
console.log(`\nMeu carrinho: ${JSON.stringify(myCart, null, 2)} \n`);


await cartService.calculateTotal(myCart);

// Deletar item do carrinho
cartService.deleteItem(myCart,item1.name);
console.log(` \nMeu carrinho depois que item ${item1.name} foi deletado: ${JSON.stringify(myCart, null, 2)} \n`);



console.log("Shopee cart total is:")
await cartService.calculateTotal(myCart);

// por padrão o indece começa por zero na exibição do carrinho esta sendo somando + 1
// Neste caso será removido item 2 descrito do carrinho
cartService.removeItem(myCart, 1)
console.log(` \nMeu carrinho depois remover o item de indice 1: ${JSON.stringify(myCart, null, 2)} \n`);

console.log("Shopee cart total is:")
await cartService.calculateTotal(myCart);

// Exibir itens do carrinho final
await cartService.displayCart(myCart);







