class Factura {
    constructor (cliente, elemento) {
        this.cliente= cliente;
        this.elemento= elemento;
        this.informacion= {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago:  "En metálico"
        }

        this.calculoTotal=function() {
          for (var i=0; i< this.elemento.lenght; i++) {
            this.informacion.baseImponible += this.elemento[i].cantidad * this.elemento[i].precio;
          }
          this.informacion.total= this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }

        this.mostrarTotal=function(){
          this.calculoTotal();
          alert('El precio de su compra asciende a'+ this.informacion.total);
        }
    }
}

class cliente {
    constructor(nombre, direccion, telefono, nif){
        this.nombre= nombre;
        this.direccion= direccion;
        this.telefono= telefono;
        this.nif= nif;
    }  
}

class elemento {
    constructor (descripcion, cantidad, precio){
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

const primercliente=new cliente('Pepe','Coruña','981200520','334554298');
const arrayelementos=[new elemento ("botellas",5,10),new elemento ("latas",6,2)];
const primerafactura=new Factura(primercliente,arrayelementos);
primerafactura.mostrarTotal();


 