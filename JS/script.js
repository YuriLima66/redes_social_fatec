// Seleciona o elemento botão com o ID 'open_btn' e armazena em uma variável.
const openBtn = document.getElementById('open_btn');

// Seleciona o elemento sidebar com o ID 'sidebar' e armazena em uma variável.
const sidebar = document.getElementById('sidebar');

// Define uma função para alternar o estado da sidebar.
function toggleSidebar() {
  // Adiciona ou remove a classe 'open-sidebar' do elemento sidebar.
  // Isso controla a visibilidade da sidebar via CSS.
  sidebar.classList.toggle('open-sidebar');
}

// Adiciona um ouvinte de eventos ao botão.  A função toggleSidebar será executada
// quando o botão for clicado.
openBtn.addEventListener('click', toggleSidebar);