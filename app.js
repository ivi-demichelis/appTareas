 //******************* DESAFIO 1//

    const tareas = [
  {
    Titulo: "Maquetar html",
    Estado: "Terminado",
  },
  {
    Titulo: "Estilar css",
    Estado: "Progreso",
  },
  {
    Titulo: "Crear js",
    Estado: "Pendiente",
  },
];

// console.log(tareas);



// ****************** DESAFIO 2 //


function agregarTareas (titulo, estado) {
    tareas.push ({Titulo: titulo, Estado: estado});
    return tareas
}
// console.log (agregarTareas("Diseñar React", "Por trabajar"));





// *************** DESAFIO 3//

const listarTareas = (estado) => {
const estadoMin = estado.toLowerCase()
    if (estadoMin === "en progreso" || estadoMin === "pendiente" || estadoMin === "terminado") {
        const listadoTareas = tareas.filter(tarea => tarea.Estado.toLowerCase() === estadoMin);
        return listadoTareas;

    } 
    return tareas;
    
}

// console.log(listarTareas("Pendiente"))




//******************* DESAFIO 4 //


const modificarDos = (titulo, estado) => {
  if (titulo === "Maquetar HTML" || titulo === "Estilar css" || titulo === "Crear js" || titulo === "Diseñar React") {
    return ("Error, ese titulo ya existe")
 } 
    tareas.push({Titulo: titulo, Estado: estado});
    console.log(tareas);
  }

// console.log(modificarDos("Completar ejercicios", "Pendiente"));





// ****************** DESAFIO 5//


 const existeTarea = (str) => {

  const tareasFiltradas = []
  tareas.forEach(tareita => {
    if(tareita.Titulo.includes(str)){
        tareasFiltradas.push(tareita)
    }
  })
  return tareasFiltradas
 }

//  console.log(existeTarea("js"));

 
