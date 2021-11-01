var n1 = '';
var n2 = '';
var op = '';

function numero(num){
    document.querySelector(".resultado").innerHTML += num;
    if (op === '') {
        n1 += num;
    } else {
        n2 += num;
    }
}

function operacao (oper) {
    op = oper;
    document.querySelector(".resultado").innerHTML += oper;
}

function clean(){
    document.querySelector(".resultado").innerHTML = "" ;
    n1 = '';
    n2 = '';
    op = '';
}

function resultado () {
    let resultado = 0;
    switch (op) {
        case '+':
            resultado = parseFloat(n1) + parseFloat(n2);
        break;
        case '-':
            resultado = parseFloat(n1) - parseFloat(n2);
        break;
        case '*':
            resultado = parseFloat(n1) * parseFloat(n2);
        break;
        case '/':
            resultado = parseFloat(n1) / parseFloat(n2);
        break;
    }
    n1 = resultado;
    n2 = '';
    op = '';
    document.querySelector(".resultado").innerHTML = resultado;
}






