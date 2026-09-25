# Web-development-Projeto-ONG
## Descrição
Esse projeto prático consiste em um **website para uma ONG fictícia**, desenvolvido na disciplina de **Desenvolvimento Front-End para Web** do curso de **Sistemas de Informação**, com o objetivo de aprender e aplicar as principais tecnologias utilizadas no desenvolvimento Front-End.

## Sobre o projeto 
- Qual o objetivo do site?
  - Representar uma ONG fictícia com um design acolhedor e moderno.
- Quais páginas ou funcionalidades possui?
  - O site conta com **três páginas**: uma página de boas-vindas, uma página com informações sobre a ONG e uma página de cadastro. Entre as funcionalidades implementadas estão a navegação no estilo SPA utilizando URL Hash, formulário com feedback visual e armazenamento de dados utilizando localStorage.

## Tecnologias utilizadas
- HTML5
  - Utilização de **markup semântico** para criação de uma estrutura **HTML acessível**, contribuindo também para a **otimização para mecanismos de busca (SEO)**;
  - Utilização de **atributos nativos de validação de formulários**, como `type`, `pattern`, `required`, `min` e `max`;
  - Organização do formulário utilizando elementos como `form`, `fieldset`, `legend` e `label`.

- CSS3
  - Criação de uma identidade visual utilizando cores quentes;
  - Organização do layout utilizando **Flexbox** e **CSS Grid**;
  - Utilização de variáveis CSS para **padronização** de cores, tamanhos e espaçamentos por meio de `:root`;
  - **Responsividade** para diferentes tamanhos de tela por meio de `@media`;
  - Implementação de **menu hamburguer** para dispositivos menores;
  - Utilização de estados visuais como `:hover` e `:focus-within`;
  - Aplicação de **feedbacks visuais** para diferentes estados do formulário.

- JavaScript
  - Manipulação do **DOM** utilizando `querySelector()`, `querySelectorAll()`, `getElementById()` e `innerHTML`;
  - Manipulação de **eventos** utilizando `addEventListener()`;
  - Utilização de `event.preventDefault()` para controlar o **comportamento padrão de links e formulários**;
  - Implementação de navegação no estilo **SPA** utilizando `window.location.hash` e o **evento hashchange**;
  - Utilização de objetos e funções para organização da lógica da aplicação;
  - Utilização de **template literals** para geração dinâmica de conteúdo;
  - **Armazenamento e recuperação de dados** com `localStorage`;
  - Conversão de dados utilizando `JSON.stringify()` e `JSON.parse()`;
  - Utilização da biblioteca externa `Day.js` para manipulação de datas.
  
- Git & Github:
  - Utilização do Git para controle de versão do projeto;
  - Criação e gerenciamento de branches;
  - Aplicação do modelo de branching **GitFlow**;
  - Utilização das branches `main`, `develop`, `feature/`, `hotfix/` e `release/`;
  - Utilização de comandos para criação, alteração, mesclagem e exclusão de branches;
  - Utilização do **GitHub** para hospedagem do repositório e publicação do projeto.
 
## Estrutura utilizada
```
Projeto-ONG/
├── index.html
├── style/
│ └── style.css
├── js/
│ ├── dados.js
│ ├── formulario.js
│ └── roteador.js
├── images/
│ ├── aperto-de-mao.jpg
│ ├── flores.jpg
│ ├── nascer-do-sol.jpg
│ └── logo.png
└── README.md
```

## Autoria
Desenvolvido por Juliana Aquino como projeto prático da disciplina Desenvolvimento Front-End para Web, do curso de Sistemas de Informação.

