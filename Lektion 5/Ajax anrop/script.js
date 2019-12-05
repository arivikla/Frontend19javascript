// // $(function() {

// //     // JAVASCRIPT
// //     const http = new XMLHttpRequest();

// //     http.onreadystatechange = function() {
// //         if(this.readyState === 4 && this.status === 200) {
// //             // console.log(this.statusText + ": " +this.statusText);
// //             document.getElementById('result').innerHTML =
// //             this.response.text
// //         }

// //         else {
// //             console.error('ERROR: ' + this.status + ': ' +this.statusText);
// //             // window.location = '404.html'
// //         }
// //     }

// //     http.open('GET', 'test.txt', true);

// //     http.send();





// // })

// $(function() {

//     function loadLanguage() {
//         const http = new XMLHttpRequest();

//         http.onreadystatechange = function() {
//             if(this.readyState == 4 && this.status == 200) {
//                 document.getElementById("headline").innerHTML = 'Hej';
//                 document.getElementById('registerButton').innerHTML = "Hejsan";
//             }

//         }

//             http.open("get", "sv-se.json", true);
//             http.send();
        
//     }

//     loadLanguage('sv.se.');

// })

$(function() {

    function loadLanguage(lang) {
        const http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {

                let obj = JSON.parse(this.responseText);

                document.getElementById("headline").innerHTML = obj.welcome;
                document.getElementById("registerButton").innerHTML = obj.register;
            }
        }

        http.open("GET", `${lang}.json`, true);
        http.send();
    }

    document.querySelector('#swedish').addEventListener('click', function() {
        loadLanguage('sv-SE');
    })

    document.getElementById('english').addEventListener('click', function() {
        loadLanguage('en-US');
    })


})