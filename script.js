 
 const nombreDias= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ao = document.getElementById("ao");


calcular.addEventListener("click", () =>{

const fechaIngreso = new Date(ao.value, mes.value - 1, dia.value);

const indexado = fechaIngreso.getDay();

const diaEspecifico = nombreDias[indexado];

let indiceDia = "";


switch (indexado) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        indiceDia = "Es un dia laboral";
        break;
    default:
        indiceDia = "No es un dia laboral";
        break;
    
   }   
       const  obresultado = document.getElementById("resultado");
       obresultado.value = `${diaEspecifico}, ${indiceDia}`;
    
   
});