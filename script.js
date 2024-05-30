document.querySelector('.theme-toggle').addEventListener('click', setTheme);

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'alternative' ? 'default' : 'alternative';
  root.className = newTheme;
  
}

console.log("hola");