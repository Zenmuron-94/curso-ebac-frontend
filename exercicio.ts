function multiplicacao(num1: number , num2: number): number{
    return num1 * num2
}

const nome1: string = 'Clóvis'

function dizOla(): string{
    return `Olá ${nome1}`;
}

const resultado: number = multiplicacao (5, 6);

const mensagem: string = dizOla();

console.log(resultado)

console.log(mensagem)