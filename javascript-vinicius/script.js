alert("Testando o script")

var nome = prompt("Qual seu nome ?")

var sobrenome = prompt("Qual seu sobrenome ?")

console.log("olá " + nome + " " + sobrenome + " seja bem vindo!")

var idade = parseInt(prompt("Qual sua idade ?"))

if (idade >= 18 && idade <= 100) {
    console.log("Mães solteiras a 5km de vocẽ")
    var idade20 = ("Mães solteiras a 5km de vocẽ")
} else {
    if (idade < 18) {
        console.log("Criança,morra!")
        var idade20 = ("Criança,morra!")
    } else {
        console.log("Ancião do caralho!")
        var idade20 = ("Ancião do caralho!")
    }
}

function calculo() {
    var delta = (b * b) - (4 * a * c);
    var resultado = "";

    if (delta < 0) {
        resultado = "<h1>Não tem solução, burro!</h1>";
    } else {
        var sqr = Math.sqrt(delta);
        var x1 = (-b + sqr) / (2 * a);
        var x2 = (-b - sqr) / (2 * a);

        if (delta === 0) {
            resultado = "<h1>A única solução é { " + x1 + " }</h1>";
        } else {
            resultado = "<h1>As duas soluções são { " + x1 + ", " + x2 + " }</h1>";
        }
    }

    // Atualiza o conteúdo do div
    document.getElementById("resultado").innerHTML += resultado;
}



