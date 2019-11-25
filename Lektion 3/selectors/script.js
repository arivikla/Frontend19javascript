/*$(function() {

    $("#btnClick1").click(function() {
        console.log('Tryckte på knappen');
    });
    
   //function() kan även skrivas som () => 

   //$("#btnClick1").click(() => console.log('Tryckte på knappen'));

    $("#btnClick1").click(() => {
        $('#content').toggle();
    });

    $('#btnClick1').click(function() {
        $(this).hide();
    })

    $('p2').click(function() {
        $(this).hide();
    })

  
    

});*/

function hideContent() {
    console.log(this);
    $(this).hide();
    $(this).show();
    console.log(this);
    $(this).hide();
    console.log('done');
}

$('#btnClick1').click(hideContent);
$('p1').click(function() {});
$('p2').click(hideContent);