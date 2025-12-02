import "./style.css";
const songs = [
  {
    name: "Because of You",
    img: "https://i.ibb.co/bMtNC5rb/artworks-7-Ct-T70h-PMy-N6s-Vs4-W3-A0-RQ-t500x500.jpg",
    alt: "Because of You",
    category: "Lana Del Rey",
    year: 2011,
  },
  {
    name: "Caught You Boy",
    img: "https://i.ibb.co/v6JBgG09/artworks-1fm-Yj-Di-Pe3c-Ex-DBb-UXm-Eg-A-t500x500.jpg",
    alt: "Caught You Boy",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "Every Man Gets His Wish",
    img: "https://i.ibb.co/MkCdx0K2/Every-Man-Gets-His-Wish-by-Lana-Del-Rey.jpg",
    alt: "Every Man Gets His Wish",
    category: "Lana Del Ray",
    year: 2009,
  },
  {
    name: "Trash Magic",
    img: "https://i.ibb.co/wNgPfjZS/7944631498-f20faef67a-z.jpg",
    alt: "Trash Magic",
    category: "Lizzy Grant",
    year: 2007,
  },
  {
    name: "You Can Be the Boss",
    img: "https://i.ibb.co/prnvydTh/artworks-xer-Qzo-TRXKV2ecw1-STV6v-Q-t500x500.jpg",
    alt: "You Can Be the Boss",
    category: "Lana Del Ray",
    year: 2010,
  },
  {
    name: "Beautiful Player",
    img: "https://i.ibb.co/SXh1DCw2/artworks-FQ9-YW3pf3ema-M6-Gz-589tbg-t1080x1080.jpg",
    alt: "Beautiful Player",
    category: "Lana Del Rey",
    year: 2011,
  },
  {
    name: "Wayamaya",
    img: "https://i.ibb.co/fdFPW9bY/image.jpg",
    alt: "Wayamaya",
    category: "Lana Rey",
    year: 2007,
  },
  {
    name: "Meet Me in the Pale Moonlight",
    img: "https://i.ibb.co/PZF9CmpJ/3e4cde9c-a1d6-48a7-8e2b-54fbaeb957c4.jpg",
    alt: "Meet Me in the Pale Moonlight",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "St. Tropez Party Girl",
    img: "https://i.ibb.co/HLdFTdLS/2aced987de53ecf547bea414bef04c9e.jpg",
    alt: "St. Tropez Party Girl",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "Jealous Girl",
    img: "https://i.ibb.co/GfMjycfF/image.jpg",
    alt: "Jealous Girl",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "Prom Song (Gone Wrong)",
    img: "https://i.ibb.co/xShB0sFd/2e662f4c-4fea-4ca9-bbfa-f6c82beb8540.jpg",
    alt: "Prom Song (Gone Wrong)",
    category: "Lana Del Ray",
    year: 2010,
  },
  {
    name: "Break My Fall",
    img: "https://i.ibb.co/cSmsnBxG/0b81a43d2ed1fa231f55d780b36e2950.jpg",
    alt: "Break My Fall",
    category: "Lana Del Ray",
    year: 2011,
  },
  {
    name: "Resistance",
    img: "https://i.ibb.co/yFTz5Q1Y/19840d058b308be578ae3691553d1cd8.jpg",
    alt: "Resistance",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "True Love on the Side",
    img: "https://i.ibb.co/RGR5dc0j/9a669983a70e148fd1af07d9ac12d950.jpg",
    alt: "True Love on the Side",
    category: "Lana Del Ray",
    year: 2010,
  },
  {
    name: "Is It Wrong",
    img: "https://i.ibb.co/rGCrDCn2/tumblr-mkapvp-VZK21qhic1oo1-500.jpg",
    alt: "Is It Wrong",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "Puppy Love",
    img: "https://i.ibb.co/39tVF3M3/Lana-Del-Rey-puppylove.jpg",
    alt: "Puppy Love",
    category: "Lana Del Rey",
    year: 2010,
  },
  {
    name: "Last Girl on Earth",
    img: "https://i.ibb.co/MyRCnmLr/takemetoparis.jpg",
    alt: "Last Girl on Earth",
    category: "Lana Del Rey",
    year: 2011,
  },
  {
    name: "Take Me to Paris",
    img: "https://i.ibb.co/Tqrp7B89/lana-del-rey.jpg",
    alt: "Take Me to Paris",
    category: "Lana Del Rey",
    year: 2011,
  },
  {
    name: "Back to the Basics",
    img: "https://i.ibb.co/V088kqZK/e73eafcc-45ec-4e63-9fbb-896f140e0864.jpg",
    alt: "Back to the Basics",
    category: "Lana Del Rey",
    year: 2011,
  },
  {
    name: "Us Against the World",
    img: "https://i.ibb.co/BHhpgX8y/Us-Against-The-World-Cover.jpg",
    alt: "Us Against the World",
    category: "Lana Del Ray",
    year: 2010,
  },
  {
    name: "Breaking My Heart",
    img: "https://i.ibb.co/Tq71Cdwr/download-1.jpg",
    alt: "Breaking My Heart",
    category: "Lana Del Rey",
    year: 2010,
  },
];

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
const DOMSelectors = {
  name: document.getElementById("name"),
  img: document.getElementById("img"),
  category: document.getElementById("category"),
  year: document.getElementById("year"),
};

function inject(songs) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="card-img" src="${songs.img}"/>
      <button class="card-info" id="card-info">Know More</button>
    </div>`
  );
}
songs.forEach((songs) => inject(songs));

function filterByCategory(category) {
  let display = document.querySelector(".container");
  display.innerHTML = "";
  const filteredCategory = songs.filter((songs) => songs.category === category);
  filteredCategory.forEach((songs) =>
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <img class="card-img" src="${songs.img}"/>
      <button class="card-info" id="card-info">Know More</button>
    </div>`
    )
  );
}
function filterByYear(year) {
  let display = document.querySelector(".container");
  display.innerHTML = "";
  const filteredYear = songs.filter((songs) => songs.year === year);
  filteredYear.forEach((songs) =>
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <img class="card-img" src="${songs.img}"/>
      <button class="card-info" id="card-info">Know More</button>
    </div>`
    )
  );
}
function filterTwentyNine(year) {
  let display = document.querySelector(".container");
  display.innerHTML = "";
  const filteredYear = songs.filter(
    (songs) => songs.year === year || songs.year < year
  );
  filteredYear.forEach((songs) =>
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <img class="card-img" src="${songs.img}"/>
      <button class="card-info" id="card-info">Know More</button>
    </div>`
    )
  );
}

function filterByButton() {
  const buttons = document.querySelectorAll("button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      if (btn.id === "lizzy-grant") {
        filterByCategory("Lizzy Grant");
      }
      if (btn.id === "lana-rey") {
        filterByCategory("Lana Rey");
      }
      if (btn.id === "lana-del-ray") {
        filterByCategory("Lana Del Ray");
      }
      if (btn.id === "lana-del-rey") {
        filterByCategory("Lana Del Rey");
      }
      if (btn.id === "twenty-nine-plus") {
        filterTwentyNine(2009);
      }
      if (btn.id === "twenty-ten") {
        filterByYear(2010);
      }
      if (btn.id === "twenty-eleven") {
        filterByYear(2011);
      }
      if (btn.id === "no-filter") {
        let display = document.querySelector(".container");
        display.innerHTML = "";
        songs.forEach((songs) => inject(songs));
      }
    })
  );
}
filterByButton();

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let album = {};
  album.name = document.getElementById("name").value;
  album.img = document.getElementById("img").value;
  album.category = document.getElementById("category").value;
  album.year = document.getElementById("year").value;
  console.log(album);
  inject(album); // add to the page
  clearFields(); // reset form inputs
});

function clearFields() {
  DOMSelectors.name.value = "";
  DOMSelectors.img.value = "";
  DOMSelectors.category.value = "";
  DOMSelectors.year.value = "";
}
