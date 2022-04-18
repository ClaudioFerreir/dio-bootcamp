function changeMode() {
//console.log('clickei!'); para testar se estar funcionando o click
changeClasses();
}

function changeClasses() {
  button.classList.toggle('dark-mode');
  h1.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}

const button = document.getElementById('mode-selector');
// console.log(button); verificar se o botao esta selecionado
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
//console.log(body); como retorna uma colecao vamos buscar o indice 0 que e o body
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
