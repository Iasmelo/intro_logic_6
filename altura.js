let pessoas = [];

function mostrarFormulario() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("output").innerHTML = "";
}

function adicionarAltura() {
    const nome = document.getElementById("nome").value.trim();
    const altura = parseFloat(document.getElementById("altura").value.trim());

    if (!nome || isNaN(altura)) {
        document.getElementById("output").innerHTML = "<p>Preencha todos os campos corretamente.</p>";
        return;
    }

    if (pessoas.length >= 15) {
        document.getElementById("output").innerHTML = "<p>Já cadastrou 15 pessoas!</p>";
        return;
    }

    pessoas.push({ nome, altura });
    document.getElementById("output").innerHTML = "<p>Altura cadastrada com sucesso!</p>";
    document.getElementById("form-container").style.display = "none";
    limparFormulario();
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
}

function mostrarMenores() {
    let menores = pessoas.filter(p => p.altura <= 1.5);
    let output = "<h3>Pessoas ≤ 1.5m:</h3><ul>";
    menores.forEach(p => output += `<li>${p.nome} - ${p.altura}m</li>`);
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function mostrarMaiores() {
    let maiores = pessoas.filter(p => p.altura > 1.5);
    let output = "<h3>Pessoas > 1.5m:</h3><ul>";
    maiores.forEach(p => output += `<li>${p.nome} - ${p.altura}m</li>`);
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function mostrarEntre() {
    let entre = pessoas.filter(p => p.altura > 1.5 && p.altura < 2.0);
    let output = "<h3>Pessoas entre 1.5m e 2.0m:</h3><ul>";
    entre.forEach(p => output += `<li>${p.nome} - ${p.altura}m</li>`);
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function mostrarMediaAltura() {
    if (pessoas.length === 0) {
        document.getElementById("output").innerHTML = "<p>Nenhuma pessoa cadastrada.</p>";
        return;
    }

    let total = pessoas.reduce((sum, p) => sum + p.altura, 0);
    let media = total / pessoas.length;
    document.getElementById("output").innerHTML = `<h3>Média das Alturas: ${media.toFixed(2)}m</h3>`;
}
