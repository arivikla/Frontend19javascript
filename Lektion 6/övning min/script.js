const url = 'https://thaikokitallkrogen.azurewebsites.net/api/fooditems'
let result = document.getElementById('result')
let search = document.getElementById('search')
let input = document.getElementById('fooditem')
let select = document.getElementById("selectCategory"); 

function populateCategories() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        for(let i=0; i < data.categories.length; i++) {
            let element = document.createElement("option");
            element.textContent = data.categories[i].name;
            element.value = i;
            select.appendChild(element);
        }

    })
}

populateCategories();

search.addEventListener('click', function(e) {
    
    let value = input.value
    let cat = select.value

    fetch(url)
    .then(res => res.json())
    .then(data => {

        for(let item of data.categories[cat].fooditems) {       
            if(item.number == value) {
                result.innerHTML = `<p>#${item.number} - ${item.name}</p><p>${item.description}</p>`
            }
        }

    })
})