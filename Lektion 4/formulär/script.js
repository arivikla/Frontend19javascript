$(function() {

    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')

            $(id).focus();
        } else {
            $(id).removeClass('is-invalid')
            $(id).addClass('is-valid')
        }
    }

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        isEmpty(id);
    });

    function ValidateEmail(email) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val()))
      {
        $('#email').removeClass('is-invalid')
        $('#email').addClass('is-valid') 
        return (true)
      }
        $('#email').addClass('is-invalid')
        $('#email').focus();
        return (false)
    }

    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#firstName');
        isEmpty('#lastName');        
        ValidateEmail() 

    })

});