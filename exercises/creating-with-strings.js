console.log('it works!');
const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt"${desc}"/>


`;

item.innerHTML = myHTML;
console.log(item.innerHTML);

const itemImage = document.querySelector('.wrapper img');

console.log(itemImage);




