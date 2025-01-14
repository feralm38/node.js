/*
site oficial para pegar pacotes nodejs: https://www.npmjs.com/
lista de 75 pacotes uteis: https://firebearstudio.com/blog/node-js-command-line-apps-utilities.html
documentação do npm: https://docs.npmjs.com/
*/


/* 
Instalando pacotes
npm install chalk -> Intalar um pacote / Cria package-lock.json (receita para reconstruir toda a arvore de pacotes) e pasta node_modules on fica salvo o pacote
dependencias apenas ambiente DEV
npm install log-symbols -D

npm fund -> Lista link de download onde estão vindo as dependencias do projeto
npm update chalk -> Atualiza o pacote, verificar se existe pacote mais recente e atualiza.

*/

// importando pacote
// Verificar a documentação no nmp.js.com
import chalk from 'chalk';
import logSymbols from 'log-Symbols'

console.log(chalk.blue.bgGray.italic("Ola, eu sou"));
console.log(chalk.green.bgCyan.bold("Jarvis\n"));

// Utilizando dois pacote importandos 
console.log(chalk.green.italic(logSymbols.success, "Servidor iniciado com sucesso"));
console.log(logSymbols.error,chalk.red.bgWhiteBright.bold("Servidor sem comunicação\n"));
