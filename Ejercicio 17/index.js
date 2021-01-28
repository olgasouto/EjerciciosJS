class Factura {
    constructor (cliente, elementos) {
        this.cliente= cliente;
        this.elementos= elementos;
        this.informacion= {
          baseImponible: 0,
          iva: 21,
          total: 0,
          formaPago:  "En metálico"
        }

        this.calculoTotal = function() {
          for (var i = 0; i< this.elementos.length; i++) {
            this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
          } 
          this.informacion.total= this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }

        this.mostrarTotal=function(){
          this.calculoTotal();
          alert('El precio de su compra asciende a'+ this.informacion.total);
        }
    }
}

class Cliente {
    constructor(nombre, direccion, telefono, nif){
        this.nombre= nombre;
        this.direccion= direccion;
        this.telefono= telefono;
        this.nif= nif;
    }  
}

class Elemento {
    constructor (descripcion, cantidad, precio){
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

const primerCliente=new Cliente('Pepe','Coruña','981200520','334554298');
const arrayElementos=[new Elemento ("botellas",5,10),new Elemento ("latas",6,2)];
const primeraFactura=new Factura(primerCliente,arrayElementos);
primeraFactura.mostrarTotal();


 