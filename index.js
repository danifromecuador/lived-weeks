let weeksDinamically = '';
let yearsDinamically = '';
const mainContainer = document.querySelector('.main');
const checkbox = '<div class="checkbox"></div>';

for (let i = 1; i <= 52; i += 1) {
  weeksDinamically += checkbox;
}

const weeks = `<div class="weeks">${weeksDinamically}</div>`;
for (let i = 1; i <= 100; i += 1) {
  yearsDinamically += weeks;
}

mainContainer.innerHTML = yearsDinamically;
