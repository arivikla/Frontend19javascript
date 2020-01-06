// function getFullName() {
//     // fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}')
//     fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Ari&lastname=V')
//     .then(res => res.text())
//     .then(data => {
//         console.log(data) //Här gör jag det jag vill göra
//     })
// }

// function getTotalSales() {
//     fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
//     .then(res => res.text())
//     .then(data => {
//         console.log(data) //Här gör jag det jag vill göra
//         localStorage.setItem('totalSales', data)
//     }) 
// }

// async function getTotalSalesAsync() {
//     const res = await (await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')).json();
//     return res;    
// }

// let totalsalesAmount = getData('https://inlupp-fa.azurewebsites.net/api/total-sales').then();
// console.log(totalSalesAmount);




// function getFullName() {
//     fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Ari&lastname=V')
//     .then(res => res.text())
//     .then(data => {        
//         localStorage.setItem('fullName')
//     }) 
// }

// let totalSales = JSON.parse(localStorage.getItem('totalSales'));
// console.log(totalSales.currency)
// console.log(totalSales.amount)

// let fullName = JSON.parse(localStorage.getItem(''));
// console.log(fullName)

//  getFullName('Hans', 'ML')
// getTotalSales()

// let totalSales = getTotalSales();
// console.log(totalSales);

// let totalSalesAmount;

// const asyncFunc = async () => {
//     let p = await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
//     let data = await p.json()

//     return data
// }

// totalSalesAmount = asyncFunc()
// console.log(totalSalesAmount.then(data => {}))