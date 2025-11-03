document.getElementById("calculateBtn").addEventListener("click", function() {
    const birthYear = document.getElementById("birthYear").value;
    const currentYear = new Date().getFullYear();
    
    if (birthYear === "" || birthYear > currentYear || birthYear < 1900) {
        document.getElementById("result").textContent = "Por favor, pare de brincadeira, ninguém é tão velho assim!";
    } else {
        const age = currentYear - birthYear;
        document.getElementById("result").textContent = `Você tem ${age} anos.`;
    }
});
