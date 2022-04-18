function changeMode() {
//console.log('clickei!'); para testar se estar funcionando o click
changeClasses();
changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";

  if(body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
// console.log(button); verificar se o botao esta selecionado
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
//console.log(body); como retorna uma colecao vamos buscar o indice 0 que e o body
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
