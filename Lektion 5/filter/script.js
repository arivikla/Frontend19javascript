$(function() {

    let nameArray=['Hans', 'Tommy', 'Anna'];

    //filter
    $('ul li').filter('#2').css('color', 'yellow');
    $('ul > li').filter('#3').remove();

    $('ul > li').filter(':even').css('background-color', 'red');

    $('ul > li').filter(':contains(list item 1)').css('background-color', 'blue');

    // let nameArray=['Hans', 'Tommy', 'Anna'];
    // console.log(nameArray);

    // $(nameArray).filter(':contains("Tommy")');
    // console.log(nameArray);

    // join
    // document.write('Original Array:' + nameArray.join(';'));

    // splice
    //  nameArray.splice(1,1);
    // console.log(nameArray)

    // grep

    // includes
    console.log(nameArray.includes('Tommy'));   
    
    // index of
    nameArray.splice(nameArray.indexOf('Tommy'),1);
    console.log(nameArray)
    

   



})