/*
Calculadora de partidas Rankeadas

Crie uma função que recebe como parametro a 
quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variavel,
o saldo de Rankeadas deve ser feito através do calculado de
(derrotas - vitórias)

Se vitorias for menor que 10 = Ferro
Se vitorias for entre 11 e 20 = Bronze
Se vitorias for entre 21 e 50 = Prata
Se vitorias for entre 51 e 80 = Ouro
Se vitorias for entre 81 e 90 = Diamante
Se vitorias for entre 91 e 100 = Lendário
Se vitorias for maior que 100 = Imortal

#Saida:
Ao final exiba a seguinte mensagem:
"O Herói tem o saldo de {saldoVitorias} vitorias e está no nível {nivel}"
*/

function calculadoraDeRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } 
    else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    }
    else {
        nivel = 'Imortal';
    }
    return `O Herói tem o saldo de ${saldoVitorias} vitorias e está no nível ${nivel}`;
}


const resultado = calculadoraDeRank(77, 30); //vitorias - derrotas
console.log(resultado); 