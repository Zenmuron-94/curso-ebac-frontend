function Stand(nome, poder) {
    this.nome = nome;
    this.poder = poder;
}

Stand.prototype.ataqueEspecial = function () {
};


function StarPlatinum(nome, poder) {
    Stand.call(this, nome, poder);
}

StarPlatinum.prototype = Object.create(Stand.prototype);
StarPlatinum.prototype.constructor = StarPlatinum;

StarPlatinum.prototype.ataqueEspecial = function () {
    return `${this.nome} usa ORA ORA ORA!`;
};

function CrazyDiamond(nome, poder) {
    Stand.call(this, nome, poder);
}

CrazyDiamond.prototype = Object.create(Stand.prototype);
CrazyDiamond.prototype.constructor = CrazyDiamond;


CrazyDiamond.prototype.ataqueEspecial = function () {
    return `${this.nome} restaura e conserta!`;
};

function GoldenWind(nome, poder) {
    Stand.call(this, nome, poder);
}


GoldenWind.prototype = Object.create(Stand.prototype);
GoldenWind.prototype.constructor = GoldenWind;

GoldenWind.prototype.ataqueEspecial = function () {
    return `${this.nome} usa MUDA MUDA MUDA!`;
};


const stand1 = new StarPlatinum("Star Platinum", "Precisão e Força");
const stand2 = new CrazyDiamond("Crazy Diamond", "Restauração e Cura");
const stand3 = new GoldenWind("Golden Wind", "Velocidade e Gerar vida");

console.log(`Stand: ${stand1.nome}, Poder: ${stand1.poder}`);
console.log(stand1.ataqueEspecial());

console.log(`Stand: ${stand2.nome}, Poder: ${stand2.poder}`);
console.log(stand2.ataqueEspecial());

console.log(`Stand: ${stand3.nome}, Poder: ${stand3.poder}`);
console.log(stand3.ataqueEspecial());