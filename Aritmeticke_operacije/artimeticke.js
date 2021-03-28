var numberA = prompt('vrednost_1');

var operacija = prompt('operacija');

var numberB = prompt('vrednost_2');

function sum(a, unesenaOperacija, b) {
    switch (unesenaOperacija) {
        case '+':
            document.write("Rezultat je " + (parseInt(a) + parseInt(b)))
            break;
        case '-':
            document.write("Rezultat je " + (parseInt(a) - parseInt(b)))
            break;
        case '/':
            document.write("Rezultat je " + (parseInt(a) / parseInt(b)))
            break;
        case '*':
            document.write("Rezultat je " + (parseInt(a) * parseInt(b)))
            break;
        default:
            document.write('Unesena vrednost nije podrzana');
            break;
    }

} sum(numberA, operacija, numberB)