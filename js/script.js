//container

let carousel= document.getElementById('carousel');
carousel.classList.add('container');

//array of objects

const images = [ 
    { 'image': 'img/01.webp', 'title': 'Marvel\'s Spiderman Miles Morale', 'text': 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 'dot': 'one'}, 
    { 'image': 'img/02.webp', 'title': 'Ratchet & Clank: Rift Apart', 'text': 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 'dot': 'two'}, 
    { 'image': 'img/03.webp', 'title': 'Fortnite', 'text': "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 'dot': 'three'}, 
    { 'image': 'img/04.webp', 'title': 'Stray', 'text': 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 'dot': 'four'}, 
    { 'image': 'img/05.webp', 'title': "Marvel's Avengers", 'text': 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 'dot': 'five'} 
];

//dinamic content

images.forEach((element) =>{
    createDivClass(carousel, 'item', 'immagine', element.image, element.dot);
});

// settaggi preliminari ai pulsanti

const items= document.getElementsByClassName("item");
const dots= document.getElementsByClassName("dot");

let next= document.getElementById("next_button");
let prev= document.getElementById("prev_button");

console.log(items, dots);
console.log(items.length);

//active alle prime immagini
items[0].classList.add('active');
dots[0].classList.add('active');


//ciclaggio next/prev

let active_item= 0;

next.addEventListener("click",    

    function(){

        if(active_item < items.length){
            items[active_item].classList.remove('active');
            dots[active_item].classList.remove('active');
            active_item++;
            items[active_item].classList.add('active');
            dots[active_item].classList.add('active');
        }
        console.log(items[active_item]);
    }
);

prev.addEventListener("click",
    function(){
        if(active_item < items.length){
            items[active_item].classList.remove('active');
            dots[active_item].classList.remove('active');
            active_item--;
            items[active_item].classList.add('active');
            dots[active_item].classList.add('active');
        }
    }
);



