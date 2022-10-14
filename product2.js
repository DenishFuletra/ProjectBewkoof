// image gallery js

const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
    const index = Math.floor(slideGallery.scrollTop / slideHeight);
    scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector('.thumbnails').innerHTML += [...slides]
    .map(
        (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
    )
    .join('');

document.querySelectorAll('.thumbnails img').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => scrollThumb());

scrollThumb();


// save data in local storage
var datamen = [
    {
        "image": "https://images.bewakoof.com/t640/men-s-black-oversized-t-shirt-439421-1659608155-1.jpg",

        "name": "Men's Black Oversized T-shirt",

        "price": "551",
        "StrikePrice": "2000",
        "size": "L",
        "Qty": "1"
    },


]

document.querySelector('.buttontags2').addEventListener('submit', addCart)




function addCart(e) {
    e.preventDefault();
    localStorage.setItem("cartData", JSON.stringify(datamen));
    alert("Your item is added to cart");
    window.location.href = "cart.html"
}

// json button
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
});


const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function onClick() {
    btn2.style.backgroundColor = 'black';
    btn2.style.color = 'white';

});


const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function onClick() {
    btn3.style.backgroundColor = 'black';
    btn3.style.color = 'white';
});

const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function onClick() {
    btn4.style.backgroundColor = 'black';
    btn4.style.color = 'white';
});
const btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function onClick() {
    btn5.style.backgroundColor = 'black';
    btn5.style.color = 'white';
});

const btn6 = document.getElementById('btn6');

btn6.addEventListener('click', function onClick() {
    btn6.style.backgroundColor = 'black';
    btn6.style.color = 'white';
});


// navdata
var navData = JSON.parse(localStorage.getItem("loginData"));

navData.map(function (elem) {
    document.querySelector("#chnagetext").innerText = elem.name;
    console.log(elem.name);
});


