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
let combinacoesVencedoras = [[1, 2 , 3], 
[3, 4, 5], 
[5, 6 ,7], 
[1, 4, 7], 
[2, 5, 8], 
[3, 6, 9], 
[1, 5, 9], 
[3, 5, 7]];


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
        }
    })
});
