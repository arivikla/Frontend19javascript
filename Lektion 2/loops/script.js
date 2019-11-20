const nameArray = ['Hans', 'Isabelle', 'Gustav', 'Amanda', 'Ali', 'Sasha', 'Fredrik', 'Mali'];

const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@hans.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@hans.com', age: 31, status: true },
    { name: 'Amanda', email: 'amanda@hans.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@hans.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@hans.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fedrik@hans.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@hans.com', age: 42, status: true },
]

//Lägg till i början
nameArray.unshift("Hejhej");
console.log(nameArray);

//Lägg till i slutet
nameArray.push('dådå');
console.log(nameArray);

//ta bort i början
nameArray.shift();
console.log(nameArray);

//ta bort i slutet
nameArray.pop();

//LOOPAR (for, each, while)
// for

/*for (let i = 0; i < nameArray.length; i++) {
    console.log('Index #${i} : ${nameArray[i]}')
};*/

for (let name of nameArray) {
    console.log(name);
};

//foreach - loopar genom ett helt objekt/array/lista
for (let user of userArray) {
    console.log(user.name + ', ' + user.age);
};

nameArray.forEach(function(name) {
    console.log(name);
});

nameArray.forEach((name) => {
    console.log(name);
});

// WHILE LOOP
 let i = 0;

 while (i < 5 ) {     
    i++
    console.log(i);
};

 do {
     console.log(i);
     i++;
 } while (i < 5);