// $(function() {

//     // $.get('sv.se.json', function(data) {
//     //     console.log(data);
//     //     $('#headline').html(data.welcome);
//     //     $('#registerButton').html(data.register);

//     })
//     // .done(console.log("testar"))
//     // .fail(console.log('fail'))

//     $.ajax({
//         method: 'GET',
//         url: 'sv-se.json',
//         dataType: 'json'    
//         statusCode:
//         {
//             200:function(res) {

//             }
//         }
//     }).done((res) => {
//         console.log(res);
//         $('#headline').html(res.welcome);
//         $('#registerButton').html(res.register);
//     }).fail((error) => {
//         console.log(error);
//     })

// })

$(function() {

    // $.get('sv-ses.json', data => {
    //     console.log(data);
    //     $('#headline').html(data.welcome);
    //     $('#registerButton').html(data.register);
    // }).fail(error => {
    //     console.log(error);
    // })



    $.ajax({
        method: 'GET',
        url: 'sv-sse.json',
        dataType: 'json',
        statusCode: 
            {
                200:function(res) {
                    $('#headline').html(res.welcome);
                    $('#registerButton').html(res.register);
                },
                404: function() {
                    console.log('funkar inte')
                }
            }
    })

})