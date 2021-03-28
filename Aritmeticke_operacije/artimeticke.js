var numberA = prompt('vrednost_1');
var numberB = prompt('vrednost_2');
var operacija = prompt('operacija');

function sum(a, b, unesenaOperacija) {
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

} sum(numberA, numberB, operacija)