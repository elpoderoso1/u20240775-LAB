let suma = 0;

let iteraciones = 0;

while (suma<1000) {
    let numeroAelatorio = Math.floor(Math.random() *100)+1;
    suma += numeroAelatorio;
    iteraciones++;
    console.log(`Iteracion ${iteraciones}: Se añadio ${numeroAelatorio}, la suma actual: ${suma}`)
}

console.log(`Proceso completado en ${iteraciones} iteraciones. Suma total: ${suma}`);