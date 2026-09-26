// Aplicação de templates

const dadosHeader = {
  index: {
    titulo: 'Nome da ONG',
    links: [
      { texto: 'Sobre', href: '#sobre' },
      { texto: 'Cadastro', href: '#cadastro' }
    ]
  },
  sobre: {
    titulo: 'Sobre nossa ONG',
    links: [
      { texto: 'Página inicial', href: '#index' },
      { texto: 'Cadastro', href: '#cadastro' }
    ]
  },
  cadastro: {
    titulo: 'Cadastro',
    links: [
      { texto: 'Página inicial', href: '#index' },
      { texto: 'Sobre', href: '#sobre' }
    ]
  },
  agradecimento: {
        titulo: 'Obrigada!',
        links: [
            { texto: 'Página inicial', href: '#index' },
            { texto: 'Sobre', href: '#sobre' }
        ]
    }
};

const elementoHeader = document.querySelector('.js-header');
const templateHeader = document.querySelector('#template-header');

function renderizarHeader(info) {
  elementoHeader.innerHTML = ''; 

  const clone = templateHeader.content.cloneNode(true);

  clone.querySelector('.js-titulo').textContent = info.titulo;

  const areaLinks = clone.querySelector('.js-links');
  info.links.forEach(link => {
    const elementoLink = document.createElement('a');
    elementoLink.classList.add('js-nav'); 
    elementoLink.href = link.href;
    elementoLink.textContent = link.texto;
    areaLinks.appendChild(elementoLink);
  });

  elementoHeader.appendChild(clone);
}

//SPA (Single Page Application)

const elementoConteudo = document.querySelector('.js-conteudo');

const rotas = {
  index: `<main>

    <section>
      <div>
        <h2> Introdução sobre a ONG </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum. </p>
      </div>
      
      <img src="/images/nascer do sol.jpg" alt="Grupo de pessoas de mãos dadas em primeiro plano, olhando para o nascer do sol no horizonte. O céu está em tons quentes de laranja e rosa, com a luz suave do amanhecer iluminando a paisagem. A cena transmite uma sensação de união, esperança e tranquilidade.">
     </section>
     </section>

     <section>
       <h2> Segundo tópico sobre a ONG </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum. </p>

      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum. </p>

     </section>
    
   </main>`,
  sobre: `<main>

    <section>
      <div>
        <h2> Projetos </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum. </p>
          <nav>
            <a href="linkprojeto1">Projeto 1</a>
            <a href="linkprojeto2">Projeto 2</a>
          </nav>
      </div>
      <img src="/images/aperto de mao.jpg" alt="Duas pessoas segurando as mãos uma da outra.">

    </section>

    <section>
      <div>
        <h2> Como nos ajudar nessa missão </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
         officia deserunt mollit anim id est laborum. </p>
        <nav>
          <a href="linkprojetoemandamento">Projeto precisando de voluntarios</a>
        </nav>
      </div>
      <img src="/images/flores.jpg" alt="Uma pessoa segurando um boque de flores.">
    </section>
    
  </main>`,
  cadastro: `<form novalidate>
      <fieldset>
        <legend> Informações necessárias </legend>
          <label for="nome">Nome Completo: <span class="badge">Obrigatório</span></label>
          <input class="formulario-texto" type="text" id="nome" name="nome" required>

          <label for="email">E-mail: <span class="badge">Obrigatório</span></label>
          <input class="formulario-texto" type="email" id="email" name="email" required>

          <label for="idade">Idade: <span class="badge">Obrigatório</span></label>
          <input class="formulario-texto" type="number" id="idade" name="idade" min="18" max="120" required>

          <label for="telefone">Telefone:</label>
          <input class="formulario-texto" type="tel" id="telefone" name="telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="00-00000-0000">

          <label for="endereco">Endereço:</label>
          <input class="formulario-texto" type="text" id="endereco" name="endereco">
      </fieldset>

      <fieldset>
        
        <legend> Como deseja ajudar? </legend>

        <div class="formulario-checkbox">
          <input type="checkbox" id="voluntario" name="voluntario" value="voluntario"/>
    <label for="voluntario">Voluntariando</label>
        </div>
      
        <div class="formulario-checkbox">
          <input type="checkbox" id="doacao" name="doacao" value="doacao"/>
          <label for="doacao">Doando</label>
        </div>
      

      </fieldset>

      <div class="buttonandalert">
        <button class="button" id="modalbutton" type="submit">Enviar</button>

        <div class="alert" style="display:none;">
        <span class="alertbutton" onclick="this.parentElement.style.display='none';">&times;</span>
        <spam class="symbol"> ⚠︎ </spam> Preencha corretamente todos os campos obrigatórios.
        </div>
      </div>
      
    </form>

    <div id="toast"> <spam class="symbol"> ✓ </spam> Cadastro concluído com sucesso.</div>

    <div id="myModal" class="modal" style="display: none;">

      <div class="modalcontent">
      <p>Deseja confirmar o envio das informações?</p>

        <div class="modalbuttons">
          <span class="close">Cancelar</span> 
          <button class="submitbutton" id="submitbutton" type="button">Confirmar</button>
        </div>

    </div>

    </div>`,
  agradecimento: `<main>
        <section class="card-agradecimento">
            <h1>Obrigada por se cadastrar!</h1>
            <p>Sua ajuda faz toda a diferença para a nossa missão.</p>
            <nav>
              <a href="linkparadoar" class="link-doar">Doar para algum projeto</a>
              <a href="#linkparavoluntario" class="link-voluntariar">Ser voluntário na próxima ação</a>
            </nav>
        </section>
      </main`
} 

function renderizar() {
    let hashRota = location.hash;

    if (hashRota === '') {
        hashRota = '#index';
    }

    const rota = hashRota.replace('#', '');

    if (dadosHeader[rota]) {
        renderizarHeader(dadosHeader[rota]);
    }

    const conteudoEncontrado = rotas[rota];

    const erroCarregamento = `<main>
      <p class="pagina-erro"> Página não encontrada. <p> 
    </main>`

    const conteudoFinal = conteudoEncontrado || erroCarregamento;

    elementoConteudo.innerHTML = conteudoFinal;
}

window.addEventListener('hashchange', renderizar);
renderizar();