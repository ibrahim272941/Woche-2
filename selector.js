const table = document.querySelector('.table-deutsch');

let img = document.getElementsByClassName('vhs1')[0];
let img2 = document.getElementsByClassName('vhs')[0];
console.log(img2.src);
let condt = false;
table.addEventListener('click', function (event) {
  condt = !condt;
  if (condt === true) {
    img.src =
      'https://deutsch-mit-rieke.de/wp-content/uploads/2020/10/DeutschmitRiekeLogo1200_neu.png';
    img2.src =
      'https://www.arbeitsrechte.de/wp-content/uploads/tage-pro-monat-300x197.jpg';
  } else {
    img.src =
      'https://www.arbeitsrechte.de/wp-content/uploads/tage-pro-monat-300x197.jpg';
    img2.src =
      'https://deutsch-mit-rieke.de/wp-content/uploads/2020/10/DeutschmitRiekeLogo1200_neu.png';
  }
  console.log(condt);
});

const btn = document.querySelector('#btn');
const main = document.querySelector('#main');

const iframe = document.querySelectorAll('iframe');

btn.addEventListener('click', function (event) {
  [...iframe].forEach((el) => {
    el.style.display = 'block';
  });
  main.style.height = '100%';
  btn.style.display = 'none';

  console.log('merhaba');
});
console.log(document.querySelector('.table .table-deutsch tr th img'));
