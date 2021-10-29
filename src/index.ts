let tabla:number=document.getElementById("tabla");
let hasta:number=document.getElementById("hasta");
let multiplicacion:number=0;


let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

  for (let contador:number = 1; contador <=hasta.value; contador++){
    let multiplicacion:number =tabla.value*contador;
    console.log(tabla.value,"x",contador,"=",multiplicacion)
   }