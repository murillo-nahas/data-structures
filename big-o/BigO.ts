// O(1) example. Given a N input, the cost to complete will always remain the same (N).
function numberO1(n: number) {
    console.log(`Your number: ${n}`);
}

numberO1(1);



/* O(n) example. Given this example, if the input is 1, the response will be quick, if it is
one thousand, it will cost more time, once it will print it one thousand times. */ 
function numberON(n: number) {

    for(let i: number = 1; i <= n; i++) {
        console.log(i);
    }

    console.log(`Your number: ${n}`);
}

numberON(1);



/* O(n²) example. Given this example, for each parent for iteration, we got its son iteration, so: O(n) + O(n) = O(n²). 
The cost doubles. */ 
function numberON2(n: number) {

    for(let i: number = 1; i <= n; i++) {

        let row: string = "";

        for(let i: number = 1; i <= n; i++) {
            row += row + " " + n;
        }

        console.log(row);
    }

    console.log(`Your number: ${n}`);
}

numberON2(1);
