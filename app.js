
let list = []
let inputButton = document.querySelector('#inputButton')
let inputText = document.querySelector('#inputText')
const outputList = document.querySelector('#outputList')
const clearListBtn = document.querySelector('#delete-btn')

let listFromLocalStorage = JSON.parse(localStorage.getItem("list"))

if (listFromLocalStorage) {
    list = listFromLocalStorage
    renderTask()
    renderClearButton()
}

inputButton.addEventListener('click', function() {
    list.push(inputText.value)
    inputText.value = ""
    localStorage.setItem("list", JSON.stringify(list))
    renderTask()
    renderClearButton()
    deleteTaskBtn = true
    
})

function renderTask() {
    let listItem = ""
    for (let i = 0; i < list.length; i ++) {
        listItem += `<li>${list[i]}</li>`
    }
    outputList.innerHTML = listItem
}

clearListBtn.addEventListener('click', function() {
    localStorage.clear()
    list = []
    outputList.innerHTML = ""
    console.log(list)
})

function renderClearButton() {
    clearListBtn.style.display = "block"
}

function hideBtn() {
    clearListBtn.style.display = "none"
}

