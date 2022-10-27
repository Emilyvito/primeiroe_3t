let tabuada = 4;

function escreva(){
    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1)+"<br>");
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
    for(let i=1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x " + j + " = " + (j*i)+"<br>");
        }
        document.write("<br>");
    }
}

function quadrado(){
    for(let i = 2; i <= 1000; i++){
            document.write("O quadrado de " + i + " é " + (i*i) + "<br>");
    }
}

function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcula(){
    let val = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;

    if(!Number(val)){
        alert("O valor deve ser um número.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if(!Number(j)){
        alert("O valor dos juros deve ser um número.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if(!Number(t)){
        alert("A quantidade de meses deve ser um número.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }
    let res = val;
    for(let m=1; m <= t;m++){
        res = val * (1+(j/100));
        val = res;
        //document.write("Mês " + m + " = " + moeda(res) + "<br>");
    }
    document.getElementById("total").innerHTML= "Total: " + moeda(res);
    //document.write("Resultado: "+moeda(res));
}
