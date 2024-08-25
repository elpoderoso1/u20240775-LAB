function ParOImpar(num) {
    const ver = num % 2;
    if (ver == 0) {
        return `El número ${num} es par.`;
    } else {
        return `El número ${num} no es par.`;
    }
}

let n = 120232
let res = ParOImpar(n)
console.log(res)