// let todos = [];

// const request = async (todos) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const json = await response.json();
//     return json
// }

// console.log(request());

// console.log('utanför: ' + todos);

// let todos = [];

// const todoData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//         .then(res => res.json())
//         .then(data => {            
//             // console.log(data)
//             todos = data
//         });  
// }

// todos = todoData()
// console.log(todos);

// let todos = [];

// const todoData = async () => 
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//         .then(res => res.json())
//         .then(data => {            
//             // console.log(data)
//             todos = data
//         });  


// const data = todoData();
// console.log(data);


$(function() {

    var results = []

$('body').click(function() {

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(data => {    

    results = data
    // console.log(results)

    document.getElementById('results').innerHTML = results[0].title

    localStorage.setItem('results', results)
    
})

})

console.log(localStorage.getItem('results'));

})



