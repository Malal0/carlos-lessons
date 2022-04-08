// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// const nums = 1;
// Date.prototype.getSeconds = function () { console.log("Morbyn is gay!"); };
/*console.log(array);*/
// console.log(Number.prototype);
// console.log(Date.prototype);
// console.log((new Date()).getMinutes());

// array.forEach((color, index, array) => {
//     console.log(color);
//     console.log(index);
//     console.log(array);
// });

// const newColors = colors.map((color) => {
//     return "light " + color;
// });

// const darkColors = colors.map((color) => {
//     return "dark " + color
// });

// const colorsPlus = colors.map((color) => {
//     return {
//         color, isColorful: true, level: 4
//     };
// })

// console.log(colors, "this is this the OG");
// console.log(newColors);
// console.log(darkColors);
// console.log(colorsPlus);

const fruits = [{ fruit: "apple", isSweet: true, price: 1 }, { fruit: "orange", isSweet: true, price: 1 }, { fruit: "watermelon", isSweet: true, price: 8 }, { fruit: "avocado", isSweet: false, price: 3 }, { fruit: "eggplant", isSweet: false, price: 4 }];

const ul = document.querySelector("ul");
const body = document.querySelector("body");

fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.innerText = fruit.fruit;
    ul.appendChild(li);
    console.log(fruit.fruit);
    var msg = new SpeechSynthesisUtterance();
    msg.text = fruit.fruit;
    msg.rate = 1.5;
    msg.volume = 1;
    msg.pitch = 2;
    window.speechSynthesis.speak(msg);
});

//btn.addEventListener("click", ());
const sweetFruits = fruits.filter((fruit) => {
    return fruit.isSweet === true;
});

// sweetFruits.forEach(fruit => {

// })
