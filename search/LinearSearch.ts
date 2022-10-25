// Linear Search
function linearSearch(haystack: number[], needle: number): any {

    for(let i = 0; i < haystack.length; i++) {

        if(haystack[i] === needle) {
            return needle;
        } else {
            return false;
        }
    }
}

console.log(linearSearch([3, 2, 1, 4, 5], 3));


const names = ['Javascript', 'Typescript', 'Elixir', 'PHP'];

const linearSearchByIndexOf = names.indexOf('Javascript')
// Expected output 0.