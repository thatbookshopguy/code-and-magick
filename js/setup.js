// делаем видимым окно настроек
let setupModal = document.querySelector(`.setup`);
setupModal.classList.remove(`hidden`);

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

let wizards = [];

// получаем рандомный элемент массива
let randomElem = function (arr) {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

// заполняем массив случайно сгенерированным объектами
let fillArray = function (arr) {
  for (let i = 0; i < 4; i++) {
    arr[i] = {};
    arr[i].name = randomElem(WIZARD_NAMES) + ` ` + randomElem(WIZARD_SURNAMES);
    arr[i].coatColor = randomElem(COAT_COLORS);
    arr[i].eyesColor = randomElem(EYE_COLORS);
  }
};

fillArray(wizards);

// подключаем темплейт
let similarListElem = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// создаем и добавляем элементы на основе темплейта
let createElems = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let wizardElem = similarWizardTemplate.cloneNode(true);
    let name = wizardElem.querySelector(`.setup-similar-label`);
    let coatColor = wizardElem.querySelector(`.wizard-coat`);
    let eyeColor = wizardElem.querySelector(`.wizard-eyes`);
    name.textContent = arr[i].name;
    coatColor.style.fill = arr[i].coatColor;
    eyeColor.style.fill = arr[i].eyesColor;
    similarListElem.appendChild(wizardElem);
  }
};

createElems(wizards);

// делаем видимым блок с элементами темплейта
let similarWizards = document.querySelector(`.setup-similar`);
similarWizards.classList.remove(`hidden`);
