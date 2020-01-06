function getFullName(firstname, lastname) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => console.log(data))
}

function getTotalSales() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(res => res.text())
    .then(data => {

        // här gör jag det jag vill göra

    })  


}

async function  getData(url) {
    const res = await (await fetch(url)).json();
    return res;
}

let totalSalesAmount = getData('https://inlupp-fa.azurewebsites.net/api/total-sales').then();
console.log(totalSalesAmount);