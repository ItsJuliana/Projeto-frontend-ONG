// Alert, modal e toast para verificação de formulário

const formulario = document.querySelector('form');
const alertaErro = document.querySelector('.alert');
const modal = document.querySelector('#myModal');
const botaoFecharModal = document.querySelector('.close');
const botaoConfirmar = document.querySelector('#submitbutton');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        alertaErro.style.display = 'block';
        return;
    }

    alertaErro.style.display = 'none';
    modal.style.display = 'flex'; 
});

botaoFecharModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

botaoConfirmar.addEventListener('click', function() {
    // Salvando informações e display no console.log

    modal.style.display = 'none';

    const novoCadastro = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        idade: document.querySelector('#idade').value,
        telefone: document.querySelector('#telefone').value,
        endereco: document.querySelector('#endereco').value,
        voluntario: document.querySelector('#voluntario').checked,
        doador: document.querySelector('#doacao').checked,
        dataCadastro: dayjs().format('DD/MM/YYYY [às] HH:mm'),
    };

    salvarCadastro(novoCadastro);

    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(function() {
        toast.classList.remove('show');
        location.hash = '#agradecimento';
    }, 3000);

    formulario.reset();
    localStorage.clear();
});