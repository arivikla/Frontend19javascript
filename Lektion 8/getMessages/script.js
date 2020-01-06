const messages = document.getElementById('messages');

fetch('http://inlupp-fa.azurewebsites.net/api/messages')
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

fetch('http://inlupp-fa.azurewebsites.net/api/messages').then(res => res.json())
.then(data => {

  for (message of data) {

    document.getElementById('messages').insertAdjacentHTML('beforeend', `
      <a class="dropdown-item preview-item">
        <div class="preview-thumbnail">
          <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
          </div>
          <div class="preview-item-content flex-grow">
            <h6 class="preview-subject ellipsis font-weight-normal">${message.from}</h6>
            <p class="font-weight-light small-text text-muted mb-0">
            ${message.title}
            </p>
            </div>
            </a>
            `);
  }
})

fetch('http://inlupp-fa.azurewebsites.net/api/notifications').then(res => res.json())
.then(data => {

  for (message of data) {

    document.getElementById('notifications').insertAdjacentHTML('beforeend', `
      <a class="dropdown-item preview-item">
        <div class="preview-thumbnail">
          <div class="preview-icon bg-success">
            <i class="mdi mdi-information mx-0"></i>
          </div>                
        </div>
        <div class="preview-item-content">
            <h6 class="preview-subject font-weight-normal">${message.title}</h6>
            <p class="font-weight-light small-text mb-0 text-muted">
            ${message.subtitle}
            </p>
            </div>
            </a>
            `);
  }
})