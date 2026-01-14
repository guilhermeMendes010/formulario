function salvar() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const estado = document.getElementById("estado").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email) {
        alert("Preencha pelo menos Nome e Email.");
        return;
    }

    const select = document.getElementById("gosta");
    const opcoes = Array.from(select.selectedOptions)
        .map(op => op.value)
        .join(", ") || "Nenhuma opção selecionada";

    const texto = `
Nome: ${nome}
Email: ${email}
Endereço: ${endereco}
Estado: ${estado}
O que gosta de fazer: ${opcoes}

Mensagem:
${mensagem}
`;

    const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");

    const data = new Date().toISOString().slice(0, 10);
    link.href = URL.createObjectURL(blob);
    link.download = `formulario_${data}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Arquivo salvo com sucesso!");
}