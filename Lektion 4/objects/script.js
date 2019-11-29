$(function() {

    let object = {};

    const person = {
        firstName: 'Hans',
        lastName: 'Mattin-Lassei',
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },
        address: {
                street: 'Pilgatan 2',
                zipcode: 12345,
                city: 'Västerås',
                fullAddress: function() {
                     return this.street + ', ' + this.zipcode + ' ' + this.city
                    // return '${this.street}, ${this.zipcode} {this.city}'
                }
            },
        phonenumbers: [
            '0708140986',
            '021355264'
        ],
        emailAddress: 'hans@domain.com'
        
    };

    document.write(person.address.fullAddress());  
});