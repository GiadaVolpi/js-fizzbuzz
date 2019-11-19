// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"

for (var i = 1; i < 101; i++) {
    if (i % 3 == 0) {
        console.log ("Fizz");
        if (i % 3 == 0 && i % 5 == 0) {
            console.log ("FizzBuzz");
        }
    } else if (i % 5 == 0) {
        console.log ("Buzz");
        if (i % 3 == 0 && i % 5 == 0) {
            console.log ("FizzBuzz");
        }
    } else {
        console.log (i)
    }
}
