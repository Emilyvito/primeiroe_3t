let tabuada = 4;

function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10)+"<br>");
}

function minhaTabuada(){
    for(let i=1; i = 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j = 10; j++){
            document.write(i + " x " + j + " = " + (j*i)+"<br>");
        }
        document.write("<br>");
    }
}

function quadrado(){
    for(let i = 2;i = 1000; i++){
        document.write("O quadrado de " + i + " é " + (i*i) + "<br>");
    }
}

function calcula(){
    let val = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("mes").value;
    
    let res = val * (1+(j/100))
    
    document.write("Resultado: "+res);
}

function somaNota(){
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    document.getElementById("resultado").innerHTML = "Soma: " + r;
}

function somaMedia(){
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let d = 3;
    let r = Number(n1) + Number(n2) + Number(n3)/d;
    document.getElementById("resultado").innerHTML = "Média: " + r;
}

function somaFalta(){
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let d = 180;
    let r = Number(n1) + Number(n2) + Number(n3) - d;
    document.getElementById("resultado").innerHTML = "Falta: " + r;
}