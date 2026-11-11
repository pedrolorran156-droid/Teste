// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {


// Seleciona o formulário dentro da página
    const formulario = document.querySelector("form");

// Escuta o momento em que o usuário clica no botão de enviar (submit)
formulario.addEventListener("submit", function(evento) {


    // Evita que a página recarregue (comportamento padrão do HTML)
    evento.preventDefault();

     // Pega os valores digitados nos campos
     const nome = document.getElementById("nome").value;
     const email = document.getElementById("email").value;
     const numero = document.getElementById("numero").value;
     const plano = document.getElementById("plano").value;

     // Validação simples de segurança
     if (nome === "" || email === "" || numero === "" || plano === "") {
        alert("Por favor, preencha todos os campos obrigatorios");
        return;
     }

     //mensagem de sucesso interativo
     alert(`🎉 Parabéns, ${nome}!\n\nSeu cadastro foi realizado com sucesso.\nEnviamos os detalhes do plano selecionado para o e-mail: ${email}`);
     
     // Limpa os campos do formulário após o envio

     formulario.reset();

});



});