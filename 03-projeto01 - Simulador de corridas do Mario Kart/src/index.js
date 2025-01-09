
// Criar constante com caracteristica dos jogadores
const player1  = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}


// Função rolar Dados
// Funções javascript são sicronas (executam ao mesmo tempo) a propriedade async espera terminar para executar 
async function rollDice(){    
    // Função Math com propriedades para calculos matematicos
    // retornar numero aleatório
    // Random sortei de 0 a 1 necessário multiplicar por 6
    // Como o valor pode resultar em um numero quebrado utlizado função floor para arredondar
    // Somado + 1 pois o valor maximo é 5,99  arredondado 5 para dar 6
    // return retorna valor do calculo   
    return Math.floor(Math.random() * 6) + 1;
}


async function getRandomBlock() {
    
    // Rondom geranomero aleatórios entre 0 e 1
    let random = Math.random();
    let result;
    
    switch(true){        
        case random < 0.33:
            result = "RETA";
            break;

        case random < 0.66:
            result = "CURVA";
            break;
        
        default:
            result = "CONFRONTO" ; 
            break;
    }

    return result 
}


async function logRollResult(characterName, block, diceResult, attribute) {

    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);   
    
}

// Função que chama outras funções passando parametros
async function playRaceEnginer(character1, character2){

    // declara variavel round = 1
    // coloca um condição de saida do laço até que round seja <= 5
    // se for diferente de <= 5 incrementa + 1
    for(let round = 1; round <=5; round++){
        console.log(`🏁 Rodada ${round}`)
        // Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        // Rolar os dados
        // chama a função e armazena retorno na variavel resultado do dado
        // dica alt shift + seta para baixo duplica linha
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();    
        
        // teste de habilidades valor do dado mais valor da Habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        // 1 Sinal de igual é para atribuir um valor a=1
        // 2 Sinais de igual é para comparar um valor a==1 ?
        // 3 Sinais de igual é para comparar um valor e o tipo é igal block==="RETA" (Forma mais segura de comparar strings)
        if (block==="RETA"){        
            // Resultado aleatorio do dado + velocidoade do player1
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            // Resultado aleatorio do dado + velocidoade do player2
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            // chama função resultado da rodada passando os parametros resquisitados
            // await aguarda para se inicializado
            await logRollResult(character1.NOME,"Velocidade",diceResult1,character1.VELOCIDADE)
            await logRollResult(character2.NOME,"Velocidade",diceResult2,character2.VELOCIDADE)      

        }

        if (block==="CURVA"){

            // Resultado aleatorio do dado + Manubrabilidade do player1
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            // Resultado aleatorio do dado + Manubrabilidade do player2
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME,"Manobrabilidade",diceResult1,character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME,"Manobrabilidade",diceResult2,character2.MANOBRABILIDADE)   

        }

        if (block==="CONFRONTO"){

            // Resultado aleatorio do dado + poder
            // Scopo de variavel como a varial powerResult1 esta sendo declarada dentro do scopo do if só poderá ser
            // utilizada dentro deste escopo
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME} 🥊`)

            await logRollResult(character1.NOME,"Poder",diceResult1,character1.PODER)
            await logRollResult(character2.NOME,"Poder",diceResult2,character2.PODER)
            
            // Modelo Condição if ternario para reduzir quantidade de "ifs"
            // reduzir 1 dos pontos que player 2 tem caso resultado do Play1 seja maior que play2 
            // e resultado da pontuação do play2 seja maior que 0 caso contrario diminua 0
            
            /*
            character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;
            character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
            console.log(powerResult2 === powerResult1 ? "Confronto empatado nehum ponto foi perdido":"");
            */

            if (powerResult1 > powerResult2 && character1.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
                character2.PONTOS--;
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);               
                character1.PONTOS--;
            }

        }

        // Verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} "marcou um ponto"`);
            character1.PONTOS++;
        }else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} "marcou um ponto"`);
            character2.PONTOS++;
        }

        console.log("------------------------------------")
    }
}


async function declareWinner(character1, character2) {
    console.log("Resultado Final")
    console.log(`${character1.NOME}:${character1.PONTOS}`)
    console.log(`${character2.NOME}:${character2.PONTOS}`)

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\nO Jogador ${character1.NOME} venceu a corrida! Parabêns! 🏆`);
    }else if (character2.PONTOS > character1.PONTOS){
        console.log(`\nO Jogador ${character2.NOME} venceu a corrida! Parabêns! 🏆`);
    }else{
        console.log("\nA corrida perminou em empate");
    }
}


// Função principal vai chamar as outras funções
// ao fechar a função com com parentes ({}) acrescetando () ao final essa função se tonar auto invocavel
// não precisa ser chamada para executar tipo main()
(async function main(){
    // Para acrescentar emojis no console (windows+.)
    // \n pular uma linha
    // Para concatenar valores de variaves substituir as "" por crase ``
    console.log(`🏁 🚨 Corrido entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    // Chama a função playRaceEngin passando 2 os jogadores e suas propriedades 
    // Função await espera terminar de excutar a função antes fazer quqlquer outra coisa
    await playRaceEnginer(player1,player2);
    await declareWinner(player1,player2);

})();















