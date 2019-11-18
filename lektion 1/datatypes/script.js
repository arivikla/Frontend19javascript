// variabel = något som kan innehålla information

/*

    JavaScript
    -------------
    String  = Text
    Number =  Tal, decimaltal
    Boolean  = Sant/falskt true/false
    null  =  null dvs tomt inget alls
    undefined  =  ej specificerat, varken string null boolean eller något annat
    Object  =  ett object/klass som innehåller ett eller flera värden
    Symbol = symboler kommer vi inte använda

*/

/*
    Deklarera variabler
    ------------------
    (name = 'Ari' (inte bra sätt))
    var name = 'Ari'
    let name = 'Ari'
    const name = 'pi'

    var = global variabel - accessbar överallt i koden
    let = lokal variabel - accessbar bara inom det angivna området (Nytt från 2015, bättre att använda let än var)
    const = konstant kan inte skrivas över (undantag finns)

    C# exempel
        string  name = "Ari";
        int age = 35;
    JS exempel
        let name = 'Ari';
        let age = 35;

        Strings:
            let name = "Ari" - Använd INTE!
            let name = 'Ari' - Denna ska du använda
            let name =  'Ari' - Använd denna när du ska använda placeholders

            let withoutPlaceholders = 'Hej mitt namn är ' + doUseThisOne + ' och jag är ' + age + ' år gammal.';
            let withPlaceholders = 'Hej mitt namn är ${doUseThisOne} och jag är ${age} år gammal.';
            console.log(withoutPlaceholders);
            console.log(withPlaceholders);

            avsluta varje rad med ett ; (det behövs inte i JavaScript men det är bra att göra det)

            var varName = 'Ari'
            let letName = 'Ari'
            const constName = 'pi'

            console.log(varName);
            console.log(letName);
            console.log(constName);

            JavaScript:     camelCase   firstName
            C#              Pascal      FirstName


            let myName = 'Ari Vikla';

            //Hitta antal tecken i en text
            console.log(myName.length);

            //Konvertera till versaler
            console.log(myName.toUpperCase());

            //Konvertera till gemener
            console.log(myName.toLowerCase());

            Object = Klasser
            Object = Json (JavaScript Object Notation)

            let user = {
                firstName: 'Ari',
                lastName: 'Vikla',
                age: 35,
                adress: {
                    street: Syringsvägen',
                    nr: 3,
                    zipCode: '724 76'
                    city: 'Västerås'
                },
                phoneNumbers: [
                    '0708-140986'
                ],
                isActive=true
            };


*/

