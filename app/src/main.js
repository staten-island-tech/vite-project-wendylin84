import "./style.css";
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */
const items = [
  {
    name: "Because of You",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Caught You Boy",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Every Man Gets His Wish",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Trash Magic",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "You Can Be the Boss",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "1949",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Push Me Down",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Wayamaya",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Meet Me in the Pale Moonlight",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "St. Tropez Party Girl",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Jealous Girl",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Prom Song (Gone Wrong)",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Break My Fall",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Resistance",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Heavy Hitter",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "True Love on the Side",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Is It Wrong",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "I Want It All",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Last Girl on Earth",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Put the Radio On",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "Tired of Singing the Blues",
    img: "",
    alt: "",
    category: "",
  },
  {
    name: "",
    img: "",
    alt: "",
    category: "",
  },
];
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <h2 class="card-header">${item.name}</h2>
      <img class="card-img" src="${item.img}"/>
      <button class="card-info">Know More</button>
    </div>`
  );
}
item.forEach((item) => inject(item));
