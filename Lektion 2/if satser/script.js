/*
if (true) {
    console.log('Gör det som står här');
}
*/
/*

    == om något är lika med 
    === om nått är lika med och har samma datatyp
*/
/*
let string = '13';
let number = 13;

if( string == number) {
    console.log('dessa är lika');
    console.log(string + number);
}

if( string === number) {
    console.log('dessa är lika');
    console.log(string + number);
}

*/

/*
    != om det inte är lika med 
    !== om det inte är lika med och har samma datatyp

*/
/*
if( string != number) {
    console.log('dessa är inte lika');
    console.log(string + number);
}

if( string !== number) {
    console.log('dessa är inte lika');
    console.log(string + number);
}
*/
/*
    < mindre än
    > större än
    <= mindre eller lika med
    >= större eller lika med
*/

var string = '15';
var number = 13;

if(!(string <  number)) {
    console.log('string är inte mindre än number');
}

if(string > number) {
    console.log('string är större än number');
}

let name = 'Petter'

if(name == 'Hans') {
    console.log('Hej Hans');
}

else if (name == 'Tommy') {
    console.log('Hej Tommy');
}

else {
    console.log('Okänd person');
}




