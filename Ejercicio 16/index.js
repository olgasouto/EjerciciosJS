class Cuadrado {
  constructor(lado) {
    this.perimetro=lado*4;
    this.area=lado*lado;
    console.log('El cuadrado calculado tiene', +(lado), 'cm de lado', 'perímetro' +(this.perimetro), 'cm y área', +(this.area), 'cm2');
  }
};

const cuadradoPequeño=new Cuadrado(2);
const cuadradoMediano=new Cuadrado(5);
const cuadradoGrande=new Cuadrado(10);

