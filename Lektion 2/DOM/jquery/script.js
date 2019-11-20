/*
    Javascript:
    let selectButtonId = document.getElementById('selectButton');
    let selectButtonTag = document.getElementByTagName('button');
    let selectButtonClass = document.getElementByClassName('btn');
    JQuery:
    let selectButtonId = $('#selectButton');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.btn');
*/

$(document).ready(function() {

    let selectButtonId = $('#selectButton');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.btn');  

    // SKRIVA UT TEXT
    // Javascript:      document.getElementById('divId1').innerText = 'Detta är en text';
    // JQuery:          $('#divId1').text('Detta är en text');

    $('#divId1').text('Detta är en text');

    // SKRIVA UT HTML
    // Javascript:      document.getElementById('divId2').innerHTML = '<p>paragraf</p>';
    // JQuery:          $('#divId2').html('<p>paragraf</p>');

    $('#divId2').html('<p>paragraf</p>');


    // ÄNDRA CSS
    // Javascript:      document.getElementById('divId1').style.color = '#ff8f8f';
    // JQuery:          $('#divId1').css('color', '#ff8f8f');
    
    $('#divId1').css('color', '#ff8f8f');

    // Javascript:      document.getElementById('divId2').style.fontSize = '2rem';
    // JQuery:          $('#divId2').css('font-size', '2rem');

    $('#divId2').css('font-size', '2rem');

    // Javascript:      document.getElementById('divId2').style.display = 'none';
    // JQuery:          $('#divId2').hide();

    $('#divId2').hide();
    
    // Javascript:      document.getElementById('divId2').style.display = '';
    // JQuery:          $('#divId2').show();

    $('#divId2').show();
    

    $("#selectButton").click(() => {
        $('#divId2').toggle();
    });



});