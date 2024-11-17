let registros = [];

function mostrarFormulario() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("output").innerHTML = "";
}

function adicionarRegistro() {
    const nome = document.getElementById("nome").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (!nome || !endereco || !/^\d+$/.test(telefone)) {
        document.getElementById("output").innerHTML = "<p>Preencha todos os campos corretamente. O telefone deve conter apenas números.</p>";
        return;
    }

    if (registros.length >= 10) {
        document.getElementById("output").innerHTML = "<p>Você só pode cadastrar até 10 contatos.</p>";
        return;
    }

    registros.push({ nome, endereco, telefone });
    document.getElementById("output").innerHTML = "<p>Contato cadastrado com sucesso!</p>";
    document.getElementById("form-container").style.display = "none";
    limparFormulario();
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telefone").value = "";
}

function pesquisar() {
    let nome = prompt("Digite o nome para pesquisar:").trim();
    let resultado = registros.find(r => r.nome.toLowerCase() === nome.toLowerCase());

    if (resultado) {
        document.getElementById("output").innerHTML = `
            <h3>Resultado da Pesquisa:</h3>
            <p><strong>Nome:</strong> ${resultado.nome}</p>
            <p><strong>Endereço:</strong> ${resultado.endereco}</p>
            <p><strong>Telefone:</strong> ${resultado.telefone}</p>
        `;
    } else {
        document.getElementById("output").innerHTML = `<p>Contato não encontrado!</p>`;
    }
}

function ordenar() {
    registros.sort((a, b) => a.nome.localeCompare(b.nome));
    document.getElementById("output").innerHTML = `<p>Registros ordenados por nome!</p>`;
}

function exibir() {
    if (registros.length === 0) {
        document.getElementById("output").innerHTML = `<p>Nenhum registro encontrado!</p>`;
        return;
    }

    let tabela = `
        <h3>Registros Cadastrados:</h3>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
    `;

    registros.forEach(r => {
        tabela += `
            <tr>
                <td>${r.nome}</td>
                <td>${r.endereco}</td>
                <td>${r.telefone}</td>
            </tr>
        `;
    });

    tabela += `
            </tbody>
        </table>
    `;

    document.getElementById("output").innerHTML = tabela;
}
