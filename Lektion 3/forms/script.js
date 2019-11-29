$(function() {

    $('#regForm').submit((e) => {
        e.preventDefault();
        // console.log(e);
        
        if(!(e.currentTarget[4].checked)) {
            alert('You must accept the terms of condition!');
            return false;
        }

        // alternativ 1:
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();

        // alternativ 2:
        let address = e.currentTarget[2].value;
        let role = e.currentTarget[3].value;

        // alternativ 3
        let user = {
            firstName: e.currentTarget[0].value,
            lastName: e.currentTarget[1].value,
            address: e.currentTarget[2].value,
            role: e.currentTarget[3].value
        }
    });

});