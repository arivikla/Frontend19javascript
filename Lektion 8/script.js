const messages = document.getElementById('messages');

fetch('https://inlupp-fa.azurewebsites.net/api/messages')
.then(res => res.json())
.then(data => {

    for(message of data) {

        

        messages.insertAdjacentHTML('beforeend', `
            <a>
                <p>${message.from}</p>
                <p>${message.title}</p>                
                </a>               
                
    `);
   

    }

})












