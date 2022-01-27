//sintaxe e operadores 

function operacao(){   
 
//Crie uma função que recebe dois números como parâmetros.

    let num1 = Number(prompt('Insira o primeiro número:'));
    let num2 = Number(prompt('Insira o segundo número:'));
    let soma = Number(num1+num2);
    let numeros;
    let compara10;
    let compara20;
   

//Confira se os números são iguais.   
     if( num1 === num2){
        numeros = ('são iguais');
    }else{
        numeros = ('não são iguais');
}

//Confira se a soma dos números é maior que 10 ou menor que 20.
     if( soma > 10){
        compara10= ('maior');
    } else{
        compara10= ('menor');
}
     
    if( soma > 20){
        compara20= ('maior');
        } else{
            compara20= ('menor');
    }

//Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
        alert(`Os números ${num1} e ${num2} ${numeros}. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`)
    
}

operacao();


