$(function() {

    //OBJECT - kan vara helt olika, ställer till problem

    const obj1 = {
        firstName: 'Object 1',
        lastname: 'Object 1'
    }

    const obj2 = {
        first: 'Object 2',
        last: 'Object 2'
    }

    // CLASS = Model
    // är en gemensam standard på hur ett objekt ska se ut

    // function person(firstname, lastname) {
    //     this.firstName = firstname
    //     this.lastName = lastname
    //     this.fullName = function() {
    //         return this.firstName + ' ' + this.lastName
    //     }
    // }

    // let p1 = new person('Ari', 'Vikla')
    // document.writeln(p1.fullName())   
    
    class person {
        constructor(firstname, lastname) {
            this.firstName = firstname; 
            this.lastName = lastname;             
            this.fullName = function() {
                return this.firstName + ' ' + this.lastName
            }
         }

         greetings() {
             return 'Welcome ${this.fullName()}.'
         }
    }

    const user1 = new person('Ari', 'Vikla')
    document.writeln(user1.fullName());
    document.writeln(user1.greetings());


});