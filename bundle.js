(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require("./script2")

console.log("Hello from scriptjs")

let fruitArray = ["Apple", "Mango", "Kiwi", "Banana", "Grape", "Pear"];


const fruitForm = document.querySelector("#inputSection form")
fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e) {
    e.preventDefault()
    console.log(e.target[0])
    console.log(e.target.fruitInput.value) //console.log(e.target[0].value)
    addFruit(e.target[0].value)
    console.log(e.target[0].value = "") //clearing the form
}

const fruitList = document.querySelector("#fruitSection ul")
function addFruit(fruit) {
    // console.log(fruitArray.includes(fruit));
    if (fruit === "") {
        console.log("Invalid Fruit")
    } else if (fruitArray.includes(fruit)) {
        const li = document.createElement("li")

        li.addEventListener("click", removeFruit, { once: true })

        li.textContent = fruit
        fruitList.appendChild(li)
    } else {
        alert("Not a valid fruit!")
    }
}

function removeFruit(e) {
    e.target.remove();
}



},{"./script2":2}],2:[function(require,module,exports){
const x = "abid"

console.log("hello Script2")


module.exports = x
},{}]},{},[1]);
