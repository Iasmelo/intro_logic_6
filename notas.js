let alunos = [];

function mostrarFormulario() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("pesquisa-container").style.display = "none";
    document.getElementById("output").innerHTML = "";
}

function mostrarPesquisa() {
    document.getElementById("pesquisa-container").style.display = "block";
    document.getElementById("form-container").style.display = "none";
    document.getElementById("output").innerHTML = "";
}

function adicionarRegistro() {
    const nome = document.getElementById("nome").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value.trim());
    const nota2 = parseFloat(document.getElementById("nota2").value.trim());

    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("output").innerHTML = "<p>Preencha todos os campos corretamente.</p>";
        return;
    }

    if (alunos.length >= 20) {
        document.getElementById("output").innerHTML = "<p>Você só pode cadastrar até 20 alunos.</p>";
        return;
    }

    const media = (nota1 + nota2) / 2;
    const status = media >= 5 ? "Aprovado" : "Reprovado";

    alunos.push({ nome, nota1, nota2, media, status });

    alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    document.getElementById("output").innerHTML = "<p>Aluno cadastrado com sucesso e registros ordenados!</p>";
    document.getElementById("form-container").style.display = "none";
    limparFormulario();
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}

function pesquisarRegistro() {
    const nome = document.getElementById("nome-pesquisa").value.trim();
    const aluno = alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase());

    if (aluno) {
        document.getElementById("output").innerHTML = `
            <h3>Resultado da Pesquisa:</h3>
            <p><strong>Nome:</strong> ${aluno.nome}</p>
            <p><strong>1ª Nota:</strong> ${aluno.nota1}</p>
            <p><strong>2ª Nota:</strong> ${aluno.nota2}</p>
            <p><strong>Média:</strong> ${aluno.media.toFixed(2)}</p>
            <p><strong>Status:</strong> ${aluno.status}</p>
        `;
    } else {
        document.getElementById("output").innerHTML = "<p>Aluno não encontrado.</p>";
    }
}

function apresentarRegistros() {
    if (alunos.length === 0) {
        document.getElementById("output").innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    let tabela = `
        <h3>Registros de Alunos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>1ª Nota</th>
                    <th>2ª Nota</th>
                    <th>Média</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    alunos.forEach(aluno => {
        tabela += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.media.toFixed(2)}</td>
                <td>${aluno.status}</td>
            </tr>
        `;
    });

    tabela += "</tbody></table>";

    document.getElementById("output").innerHTML = tabela;
}
