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


