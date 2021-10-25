let tabla:number=document.getElementById("tabla");
let hasta:number=document.getElementById("hasta");
let multiplicacion:number
multiplicacion =0;

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

  for (let contador:number = 1; contador:number <=hasta; contador:number++){
    let multiplicacion =tabla.value*contador;
    console.log(tabla,"x",contador,"=",resultado);
   
  }

