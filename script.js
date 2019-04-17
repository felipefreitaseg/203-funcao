// let filmes = ["Harry Potter","Titanic","Laranja Mecanica","Wall-e"];

// for(let item of filmes){
//     console.log(item);
// }

// for(let indice in filmes){
//     console.log(filmes[indice]);
// }

//let i;

//for(i=0; i<filmes.length; i++){
//    console.log(filmes[i]);
//}

// function calculadora(a,b,c,d){
//     return ((a+b+c+d)/4).toFixed(0);
// }
// console.log(calculadora(10,4,6,7));
// let calcMedia = function (n1,n2,n3){
//     return ((n1+n2+n3)/3).toFixed(1);
// }
// calcMedia=(n1,n2,n3) => {
//     return ((n1+n2+n3)/3).toFixed(1);
// }
let filmes=[
    /* 0*/{titulo:"Star Wars", classificacao: 14},
    /* 1*/{titulo:"UP", classificacao: 0},
    /* 2*/{titulo:"Ninja Assassino", classificacao: 18}
];

let idade = prompt("Qual é a sua idade:");

for (i in filmes) {
    if(idade >= filmes[i].classificacao){
        alert("Vc pode assistir " + filmes[i].titulo);
    }
}