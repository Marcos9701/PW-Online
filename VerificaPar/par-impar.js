document.getElementById("checkBtn").addEventListener("click", function() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        document.getElementById("result").textContent = "Por favor, insira um número válido!";
    } else if (number % 2 === 0) {
        document.getElementById("result").textContent = `O número ${number} é Par.`;
    } else {
        document.getElementById("result").textContent = `O número ${number} é Ímpar.`;
    }
    if (number === 0) {
        document.getElementById("result").textContent = "Então, alguns dizem que é par e outros ímpar, não consigo declarar desta vez"
    }
});
