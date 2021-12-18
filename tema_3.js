/* eslint-disable no-shadow */
const pathBefore = 'models/tema_2';
const helicoidalSurfaces = [
  {
    name: 'm1',
    title: 'Модель 1',
    text: 'Описание модель1',
  },
  {
    name: 'm2',
    title: 'Модель 2',
    text: 'Описание модель1',
  },
];
// Start value
let isDescriptionVisible = false;
// let mode3D = true;
let currentObject = 'm1';
let currentTitle = helicoidalSurfaces.find(
  (currentTitle) => currentTitle.name === currentObject,
).title;
let currentText = helicoidalSurfaces.find(
  (currentText) => currentText.name === currentObject,
).text;

// Functions
const updateCurrentLine = (name) => {
  currentObject = name;
  currentTitle = helicoidalSurfaces.find(
    (currentTitle) => currentTitle.name === currentObject,
  ).title;
  currentText = helicoidalSurfaces.find(
    (currentText) => currentText.name === currentObject,
  ).text;
};
const setTitle = (title) => {
  document.getElementById('title').innerHTML = title;
};
const setTheoryText = (theoryText) => {
  document.getElementById('theory_text').innerHTML = theoryText;
};

const showModel = () => {
  document
    .getElementById('model')
    .setAttribute('gltf-model', `${pathBefore}/${currentObject}.glb`);
};

const toggleTheoryText = () => {
  document
    .getElementById('theory_text')
    .setAttribute(
      'style',
      `display: ${isDescriptionVisible ? 'none' : 'block'};`,
    );
  isDescriptionVisible = !isDescriptionVisible;
};
const handleLineChange = (e) => {
  if (e.target.tagName === 'LI') {
    updateCurrentLine(e.target.id);
    setTitle(currentTitle);
    setTheoryText(currentText);
    showModel();
  }
};

window.onload = () => {
  setTitle(currentTitle);
  setTheoryText(currentText);
  showModel();
  document
    .getElementById('home_btn')
    .addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      location.href = 'index.html';
    });
  // Показать/спрятать теоретический текст
  document
    .getElementById('info_btn')
    .addEventListener('click', () => toggleTheoryText());
  // Изменение прямой
  document
    .getElementById('menu_options')
    .addEventListener('click', (e) => handleLineChange(e));
};
