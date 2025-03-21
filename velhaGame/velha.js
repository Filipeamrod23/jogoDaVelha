// x = 0
// o = 1
// x = 2
// o = 3
// 2 / 2 = 1
let teclas = document.querySelectorAll('.cell');
let jogadorAtual = 0;
let jogador = document.querySelector('.body-title');
let gameBoard = ["", "", "", "", "", "", "", "", "", ""];
let reset = document.querySelector('.reset');

reset.addEventListener("click", function(){
    window.location.reload();
});
let combinacoesVencedoras = [
[0, 1, 2], 
[3, 4, 5], 
[6, 7, 8], 
[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8], 
[0, 4, 8], 
[2, 4, 6]];


teclas.forEach((tecla, index)=>{
    tecla.addEventListener('click', function(){
        if(tecla.innerText === ""){
            let simbolo;
            

            if(jogadorAtual % 2 === 0){
                jogador.innerText = "Vez do jogador: 'O'"

                simbolo = "X"
            }else{
                jogador.innerText = "Vez do Jogador: X"
                simbolo = "O"
            }
            tecla.innerText = simbolo;
            jogadorAtual = jogadorAtual + 1
            gameBoard[index] = simbolo
            checkPositions()
        }
    })
});

function checkPositions(){
    // for: estrutura de repetição
    for(let i = 0; i <= 8; i = i + 1){
        if(gameBoard[combinacoesVencedoras[i][0] ]=== "X" && gameBoard[combinacoesVencedoras[i][1]]=== "X" && gameBoard[combinacoesVencedoras[i][2]] === "X"){
            teclas[combinacoesVencedoras[i][0]].style.background = "green";
            teclas[combinacoesVencedoras[i][1]].style.background = "green";
            teclas[combinacoesVencedoras[i][2]].style.background = "green";

            jogador.innerText = "X ganhou!!11!!!11"
        }else if(gameBoard[combinacoesVencedoras[i][0]] === "O" && gameBoard[combinacoesVencedoras[i][1]] === "O" && gameBoard[combinacoesVencedoras[i][2]] === "O"){
            teclas[combinacoesVencedoras[i][0]].style.background = "green";
            teclas[combinacoesVencedoras[i][1]].style.background = "green";
            teclas[combinacoesVencedoras[i][2]].style.background = "green";

            jogador.innerText = "O ganhou!!11!!!11"
        }
        
        if(jogadorAtual == 9){
            teclas.forEach(tecla => tecla.style.background = "gray");
            jogador.innerText = "EMPATE"
        }
    }
}
