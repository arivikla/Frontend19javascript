const form    = document.querySelector('#demo-form');
const input   = document.querySelector('#demo-input');
const results = document.querySelector('#demo-results');


function validateInput(inputValue) {
    if(inputValue === '') {
         
         alert("Name must be filled out");
         return false;  
        
    } 

    return true;
}

function sendRequest(message) {

    
    
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = []

    for(let i=0; i< e.target.length;i++) {     
        if(e.target[i].type === "text") {
            errors[i] = validateInput(e.target[i].value);
        }  
    }

    if(!errors.includes(true)) {
        sendRequest('funkar')
    }
})