// Nome
var nome = prompt("Digite seu nome:");

// Renda
var renda = Number(prompt("Digite sua renda:"));
while (isNaN(renda)) {
  renda = Number(prompt("Digite um número válido para renda:"));
}

// Quantidade de despesas
var qtd = Number(prompt("Quantas despesas? (1 a 5)"));
while (isNaN(qtd)) {
  qtd = Number(prompt("Digite um número válido:"));
}

// Limite de 1 a 5
if (qtd < 1) {
  qtd = 1;
} else if (qtd > 5) {
  qtd = 5;
}

// Soma das despesas
var total = 0;

for (var i = 1; i <= qtd; i++) {
  var valor = Number(prompt("Despesa " + i + ":"));
  
  while (isNaN(valor)) {
    valor = Number(prompt("Digite um número válido:"));
  }

  total = total + valor;
}

// Cálculo
var sobra = renda - total;
var mensagem = "";

// Decisão
if (total > renda) {
  mensagem = "Você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "Boa sobra.";
  } else {
    mensagem = "Pode melhorar.";
  }
}

// Resultado
var resultado =
  "Nome: " + nome + "\n" +
  "Renda: " + renda.toFixed(2) + "\n" +
  "Despesas: " + total.toFixed(2) + "\n" +
  "Sobra: " + sobra.toFixed(2) + "\n" +
  mensagem;

// Saída
alert(resultado);
console.log(resultado);