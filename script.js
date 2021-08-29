//função validaform faz o mapeando dos campos do form,caso esteja vazio retorna um alert (campos não preenchido) 
function validarForm() {
    let validador = document.forms["validaForm"].value;
    if (validador == "") {
        alert("Campos não preenchido!");
        return false;
    }
}
//função valicpf faz validação dos caracteries do campo cpf
function validaCpf(cpf)
{  
//variavel cpfV aguarda objetos via teclado a qual fará comparação dos caracteries, cujo metado replace cambea os objetos devido expressao regular passado no parametro
    cpfV = cpf.replace(/[^\d]+/g, '');

    if (cpf == '') return false;

    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")

        return false;

    add = 0;

    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);

    rev = 11 - (add % 11);

    if (rev == 10 || rev == 11)
        rev = 0;

    if (rev != parseInt(cpf.charAt(9)))
        return false;

    add = 0;

    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);

    rev = 11 - (add % 11);

    if (rev == 10 || rev == 11)
        rev = 0;

    if (rev != parseInt(cpf.charAt(10)))
        return false;

    return true;
}

// Apresenta que CPF não é valido, alerta a mensagem, em seguida
function validarCPF(cpf) 
{
    if (!validaCpf(cpf.value))
    {
        alert("CPF inválido!");
        cpf.value = "";
    }
}


const cadastro = document.getElementById('form-cadastro')

cadastro.addEventListener('submit', function (e) 
{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let rg = document.getElementById('rg').value;
    let sexo = document.getElementById('sexo').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let telefonefixo = document.getElementById('telefonefixo').value;
    let telefonecelular = document.getElementById('telefonecelular').value;

}).then(response => 
{
    if (response.status === 200) 
    {
        alert('Cadastrado com sucesso');
    } 
    
    else 
    {
        alert("FALHA");
    }
})
