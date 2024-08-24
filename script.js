const inputFieldEl = document.getElementById('input-field')
const fromInputField = document.getElementById('from-field')
const toInputField = document.getElementById('to-field')
const publishBtn = document.getElementById('publish-btn')
const endorsementList = document.getElementById('list')


publishBtn.addEventListener("click",function(){

    let inputValue = inputFieldEl.value
    let toValue = toInputField.value
    let fromValue = fromInputField.value
    inputFieldEl.value = ''

   // If the input field is empty, do nothing
   if (inputValue === '') {
    return;
}

// Add the endorsement to the list
endorsementList.innerHTML += `
<li> 
    <div class="endorsement-item">
    <div class="endorsement-to">To: ${toValue}</div>
    <div class="endorsement-text">${inputValue}</div>
    <div class="endorsement-from">From: ${fromValue}</div>
    </div>

</li>
`;


inputFieldEl.value = '';
fromInputField.value = '';
toInputField.value = '';

})