
let list = []
let inputButton = document.querySelector('#inputButton')
let inputText = document.querySelector('#inputText')
const outputList = document.querySelector('#outputList')


console.log(outputList)

inputButton.addEventListener('click', function() {
    list.push(inputText.value)
    inputText.value = ""
    renderTask()
})

function renderTask() {
    let listItem = ""
    for (let i = 0; i < list.length; i ++) {
        listItem += `<li>${list[i]}<input type="checkbox"></li>`
    }
    outputList.innerHTML = listItem
}
