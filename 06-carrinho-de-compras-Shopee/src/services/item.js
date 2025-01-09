// Quais ações Item pode fazer ?
// Casos de uso, para cada caso de ser criada uma função
// Assinatura dos metodos mapear todas as acões.

/*
- Criar Item com subtotal Calculado (caso a pessoa adicioone dois item ja tem que vir com subtotal calculado)

*/

async function createItem(name, price, quantity) {
    // Retonar um objeto tudo que esta entre {} é um objeto
    return {
        name,
        price,
        quantity,
        // objeto tipo função
        subtotal: () => price * quantity
    }
    
}

// Uma das formas de exportar a função
export default createItem;





