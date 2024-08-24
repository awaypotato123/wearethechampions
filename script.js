const inputFieldEl = document.getElementById('input-field')
const publishBtn = document.getElementById('publish-btn')
const endorsementList = document.getElementById('list')

publishBtn.addEventListener("click",function(){

    let inputValue = inputFieldEl.value
    inputFieldEl.value = ''

    endorsementList.innerHTML += `
    
    <li>${inputValue}</li>
    
    
    `

})