require("./script2")

console.log("Hello from scriptjs")

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
    if (fruit === "") {
        console.log("Invalid Fruit")
    } else {
        const li = document.createElement("li")
        li.textContent = fruit
        fruitList.appendChild(li)
    }
}


