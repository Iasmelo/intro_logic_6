let funcionarios = [];

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

function adicionarFuncionario() {
    const matricula = parseInt(document.getElementById("matricula").value.trim());
    const nome = document.getElementById("nome").value.trim();
    const salario = parseFloat(document.getElementById("salario").value.trim());

    if (!matricula || !nome || isNaN(salario)) {
        document.getElementById("output").innerHTML = "<p>Preencha todos os campos corretamente.</p>";
        return;
    }

    if (funcionarios.length >= 20) {
        document.getElementById("output").innerHTML = "<p>Já cadastrou os 20 funcionários!</p>";
        return;
    }

    funcionarios.push({ matricula, nome, salario });
    funcionarios.sort((a, b) => a.matricula - b.matricula);
    document.getElementById("output").innerHTML = "<p>Funcionário cadastrado com sucesso!</p>";
    document.getElementById("form-container").style.display = "none";
    limparFormulario();
}

function limparFormulario() {
    document.getElementById("matricula").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("salario").value = "";
}

function pesquisarFuncionario() {
    const matricula = parseInt(document.getElementById("matricula-pesquisa").value.trim());
    const funcionario = funcionarios.find(f => f.matricula === matricula);

    if (funcionario) {
        document.getElementById("output").innerHTML = `
            <h3>Resultado:</h3>
            <p>Matrícula: ${funcionario.matricula}</p>
            <p>Nome: ${funcionario.nome}</p>
            <p>Salário: R$${funcionario.salario.toFixed(2)}</p>
        `;
    } else {
        document.getElementById("output").innerHTML = "<p>Funcionário não encontrado!</p>";
    }
}

function mostrarAcimaMil() {
    const acimaMil = funcionarios.filter(f => f.salario > 1000);
    exibirFuncionarios("Funcionários com salário > R$1.000,00", acimaMil);
}

function mostrarAbaixoMil() {
    const abaixoMil = funcionarios.filter(f => f.salario < 1000);
    exibirFuncionarios("Funcionários com salário < R$1.000,00", abaixoMil);
}

function mostrarIgualMil() {
    const igualMil = funcionarios.filter(f => f.salario === 1000);
    exibirFuncionarios("Funcionários com salário = R$1.000,00", igualMil);
}

function exibirFuncionarios(titulo, lista) {
    if (lista.length === 0) {
        document.getElementById("output").innerHTML = `<h3>${titulo}</h3><p>Nenhum funcionário encontrado.</p>`;
        return;
    }

    let tabela = `
        <h3>${titulo}</h3>
        <table>
            <thead>
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Salário</th>
                </tr>
            </thead>
            <tbody>
    `;

    lista.forEach(f => {
        tabela += `
            <tr>
                <td>${f.matricula}</td>
                <td>${f.nome}</td>
                <td>R$${f.salario.toFixed(2)}</td>
            </tr>
        `;
    });

    tabela += `
            </tbody>
        </table>
    `;

    document.getElementById("output").innerHTML = tabela;
}