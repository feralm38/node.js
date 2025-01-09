// Quais ações meu carrinho pode fazer ?
// Casos de uso, para cada caso de ser criada uma função
// Assinatura dos metodos mapear todas as acões.

/*
- Adicionar item
- Remover um item
- Deletar item do carrinho
- Calcular o total
*/

// ✅-> adicionar item ao carrinho 
async function addItem(userCart,item){
    // função push adciona um elemento dentro de um vetor
    // Vetor aciona varios items na mesma linha
    userCart.push(item);    
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
    // função reduce permite pegar um item interagir com todos os itens como se fosse um for reduzindo a valor
    // Na função reduce é solicitado como parametro um valor anterior previus value e item atual, para isso colocamos
    // uma função para preecher esse parametros da função.
    // 0 é parametro valor inicial
    // função subtotal esta no aquivo item.js    
    const result = userCart.reduce((total,item)=> total + item.subtotal(),0);  
    console.log(`💵 Total: ${result}`);
    return userCart.reduce((total,item)=> total + item.subtotal(),0);    
}

// -> remover item do carrinho diminui um item caso tenha mais de uam unidade
async function removeItem(userCart, index) {

    // transforma o indice visual do usuário, para o indece do backend
    const deleteIndex = index - 1;

    // Verifica se indice que usuário esta passando no parametro é maior 0 e se é menor do que o tamanho do carrinho
    if(index >=0 && index < userCart.length){
        // localiza o indece e remove um item
        userCart.splice(deleteIndex,1)
    }
    
}

// -> deletar item do carrinho
async function deleteItem(userCart, nameItem) {
    // findIndex procura o indice que aquele vetor se encontra, item é só um nomeclatura.
    // FindIndex vai percorrer item a item do array 
    // ver qual tem o mesmo nome cada ver que encontrar esse valor será guardado dentro da constate index       
    // depois da => fica a validação se item percorrido == item informado no parametro
    // Arrow function função de seta => 
    // Antes da seta paraemtros de entrada depois da seta oepração a ser realizada 
    
    const index = userCart.findIndex((item) => item.name == nameItem);
    
    // Se não econtrar nenhum retorna indice (-1)   
    if (index != -1){        
        // splice deleta indeice especifico de um array
        userCart.splice(index,1)        
    }           

}

async function displayCart(userCart) {
    console.log(" \n Shopee cart list - Carrinho fechado");
    // forEach percorre um array
    userCart.forEach((item, index) => {
        console.log(`\n ${index + 1}.${item.name} - R$ ${item.price} | Qtd ${item.quantity} | Subtotal = ${item.subtotal()}\n`)
    });
}


// exportando varias as funções padrão ESM
export {addItem,calculateTotal,deleteItem,removeItem,displayCart}







