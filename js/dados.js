
function salvarCadastro (novoCadastro) {
    const cadastrosSalvos = localStorage.getItem('cadastros');
    const listaCadastros = cadastrosSalvos ? JSON.parse(cadastrosSalvos) : [];

    novoCadastro.dataCadastro = dayjs().format('DD/MM/YYYY [às] HH:mm');
    listaCadastros.push(novoCadastro);

    localStorage.setItem('cadastros', JSON.stringify(listaCadastros));

    console.log('Dado gravado no localStorage (como string):');
    console.log(localStorage.getItem('cadastros'));

    console.log('Dado recuperado e convertido de volta para array/objeto JS:');
    console.log(JSON.parse(localStorage.getItem('cadastros')));
}