const { clear } = require("console");

require("./script2")

console.log("Hello from scriptjs")

let fruitArray = ["Apple", "Mango", "Kiwi", "Banana", "Grape", "Pear"];


const fruitForm = document.querySelector("#inputSection form")
fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e) {
    e.preventDefault()

    fetchFruitData(e.target[0].value)


    // console.log(e.target[0])
    // console.log(e.target.fruitInput.value) //console.log(e.target[0].value)
    // addFruit(e.target[0].value)
    console.log(e.target[0].value = "") //clearing the form
}

async function fetchFruitData(fruit) {
    // fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
    //     .then(resp => {
    //         if (resp.ok) {
    //             return resp.json() //json to javascript object
    //         } else {
    //             throw Error("Error occured with http code: " + resp.status)
    //         }
    //     })
    //     .then(data => addFruit(data))
    //     .catch(err => console.log(err))

    try {
        const response = await fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
        const fruitResponse = await fetch(`https://pixabay.com/api/?q=${fruit}+fruit&key=40368249-0422ead8f6a73229135980b4d`)
        if (response.ok) {
            let data = await response.json();
            addFruit(data)
        } else {
            throw Error("Error occured with http code: " + resp.status)
        }
    } catch (err) {
        console.log(e)
    }

}

const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection p")


let calories = 0
let fruitCal = {}

function addFruit(fruit) {
    // console.log(fruitArray.includes(fruit));
    if (fruit === "") {
        console.log("Invalid Fruit")
    } else if (!fruitArray.includes(fruit)) {
        const li = document.createElement("li")

        li.addEventListener("click", removeFruit, { once: true })

        console.log(fruit)
        li.textContent = fruit.name //fruit['name']
        fruitList.appendChild(li)

        fruitCal[fruit.name] = fruit.nutritions.calories

        calories += fruit.nutritions.calories
        fruitNutrition.textContent = calories

    } else {
        alert("Not a valid fruit!")
    }
}

function removeFruit(e) {
    console.log(fruitCal)
    const fruitName = e.target.textContent
    calories = calories - fruitCal[fruitName]
    console.log("please" + JSON.stringify(fruitCal[fruitName]))
    fruitNutrition.textContent = calories

    delete fruitCal[fruitName] //deleting the key value pair (fruitName) is the key https://www.youtube.com/watch?v=TCXQsQL5kPo

    e.target.remove();

    // fetch(`https://fruity-api.onrender.com/fruits/${e.target.textContent}`)
    //     .then(resp => {
    //         if (resp.ok) {
    //             return resp.json() //json to javascript object
    //         } else {
    //             throw Error("Error occured with http code: " + resp.status)
    //         }
    //     })
    //     .then(data => {
    //         calories = calories - data.nutritions.calories
    //         fruitNutrition.textContent = calories
    //     })
    //     .catch(err => console.log(err))
}
