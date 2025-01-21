
// Type script não precisa passar a extenção do arquivo email.ts
// Importa a função getBaseEmail do arquivo email.ts
import { getBaseEmail } from "./services/email";

// Como é obrigado passar um valor tipo string no parametro se passar qualquer outro valor vai dar erro
// getBaseEmail(senderName:string)

async function main() {
  console.log(await getBaseEmail("joao"))  
  console.log("Finalizado")  
  console.log("...")
}

main();










