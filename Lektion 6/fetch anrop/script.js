// $(function() {   

// })

console.log(0)

let todos = [];

console.log(1)

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => {
    if(res.status === 200) {
        console.log(2)
        return res.json()
    }
    
})

.then(data => {
todos = data
console.log(3)
   
})

.catch(error => {
    document.write('Ett fel har uppstått! ' + error)
    todos = [];
})

for(todo of todos) {
    console.log('done!');
}