class Clima {
    constructor(celsius) {
        this._celsius = celsius
    }
    get fahrenheit(){
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(fahrenheit){
        this._celsius = ((fahrenheit - 32) * 5) / 9;
    }
    get celsius(){
        return this._celsius;
    }
}

const clima = new Clima(25);

console.log(`Clima en grados Fahrenheit: ${clima.fahrenheit}°F`);
clima.fahrenheit = 86;
console.log(`Clima en grados Celsius: ${clima.celsius}°C`);
