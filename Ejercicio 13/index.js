const meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
console.log('Lista inicial',meses)

const mesesLong=meses
  .filter(mes => mes.length>7)
  .map(mes => mes.toUpperCase());
console.log('Lista de meses en mayúsculas con>7 letras',mesesLong);

var mesesLongNum=mesesLong.length
console.log('Resultado',mesesLongNum);
