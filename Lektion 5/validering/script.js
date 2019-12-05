$(function() {    

    function validateField(input) {
        let value=$(input).val();
        let fieldName = $(input).attr('data-fieldName')
        
        // if(value.length < 1) {
        //     $('#error_messages').append('<li>You must enter your ${fieldName}</li>')
        // }
 
    }  

    function validateFirstName() {
        let value = $('#firstName').val()

        if(value === '') {
            $('#firstName_Error').text('Du måste ange ett förnamn');
        }

        else if(value<2) {
            $('#firstName_Error').text('Du måste ange minst två tecken');

        }

        else {
            $('${input}_Error').text('');
        }
    }

    

    $('#oneForm').on('submit', function(e) {
        // förhindra att den skickar datat och laddar om sidan
        e.preventDefault();

        validateFirstName()

        // validateField('#firstName')        
        // validateField('#lastName')

    })





});