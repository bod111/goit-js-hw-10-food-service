import './sass/main.scss';
import DATA from './menu.json';
import foodCards from './templates/foodCards.hbs';
const refs = {
  menuRef: document.querySelector('.js-menu'),
  bodyColor: document.querySelector('body'),
  themeBtn: document.querySelector('#theme-switch-toggle'),
  ligthTheme: 'light-theme',
  darkTheme: 'dark-theme',
};
const menuMarkup = foodCards(DATA);
refs.menuRef.innerHTML = menuMarkup;

refs.themeBtn.addEventListener('change', onThemeSwitch);

function onThemeSwitch(evt) {
  const themeColor = evt.target.checked ? refs.darkTheme : refs.ligthTheme;
  console.log('onThemeSwitch ~ themeColor', themeColor);
  console.log('onThemeSwitch ~ evt.target.checked', evt.target.checked);

  setData(themeColor);
  setBodyColor(themeColor);
}
// запись темы body
function setData(data) {
  localStorage.setItem('theme', data);
}
// запись/перезапись класса темы body
function setBodyColor(classColor) {
  refs.bodyColor.className = classColor;
  console.log('setBodyColor ~ classColor', classColor);
}

function changeCheckboxTheme() {
  const firstData = localStorage.getItem('theme') || refs.ligthTheme;
  console.log('changeCheckboxTheme ~ firstData', firstData);
  setBodyColor(firstData);

  refs.themeBtn.checked = firstData === refs.darkTheme;
}
changeCheckboxTheme();
