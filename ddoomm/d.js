function cargarDatos() {
    //llamar
    let nombre = document.getElementById("nombre").value
    let año = +document.getElementById("año").value
    let curso = document.getElementById("curso").value
    let membrete = document.getElementById("membrete")
    //crear p
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    //verificar
    if(!nombre){
        alert("Ingrese el nombre")
    }else{
        p1.innerHTML = ("Nombre del Estudiante: ") + nombre
    }
    if(!año){
        alert("Ingrese el año")
    }else{
        p2.innerHTML = ("Año lectivo: ") + año
    }
    if(!curso){
        alert("Ingrese el curso")
    }else{
        p3.innerHTML = ("Curso:") + curso
    }
    //agregar
    membrete.append(p1, p2, p3)
    //limpiar
    document.getElementById("nombre").value = ""
    document.getElementById("año").value = ""
    document.getElementById("curso").value = ""
    //eliminar
    let eliminar = document.getElementById("primera");
    eliminar.remove();
    //habilitar boton subir materia
    let boton = document.getElementById("boton");
    boton.disabled = false
}
let cont = 0;
let suma = 0;
function subirMateria() {
    //llamar
    let materia = document.getElementById("mm").value
    let pcuatri = +document.getElementById("pcuatri").value
    let scuatri = +document.getElementById("scuatri").value
    //agregar a table
    let spadre = document.getElementById("spadre")
    let tr = document.createElement("tr")
    spadre.appendChild(tr)
    let td1 = document.createElement("td")
    td1.innerHTML = materia
    let td2 = document.createElement("td")
    td2.innerHTML = pcuatri
    let td3 = document.createElement("td")
    td3.innerHTML = scuatri
    let td4 = document.createElement("td")
    let promedio = ((pcuatri + scuatri) / 2)
    td4.innerHTML = promedio
    tr.append(td1, td2, td3, td4)
    //promedio final
    let promediogeneral = document.getElementById("pro")
    suma = suma + promedio
    console.log(suma)
    cont++
    promediogeneral.innerHTML = ("Promedio Final: ") + (suma / cont).toFixed(2)
    //eliminar materias
       let selectComplet = document.getElementById("mm")
       selectComplet.querySelectorAll("option");
       console.log(selectComplet)
       for(i=0;i<selectComplet.lenght;i++){
        if(selectComplet[i].value===materia){
            selectComplet[i].remove() 
        }
       }
    
    
    //limpiar
    document.getElementById("mm").value=""
    document.getElementById("pcuatri").value=""
   document.getElementById("scuatri").value=""
  
    
    //habilitar boton imprimir
    let botonimprimir=document.getElementById("imprimir")
    botonimprimir.disabled=false
}

function Imprimir() {
    confirm("¿Desea imprimir?")
    let segunda=document.getElementById("segunda");
    segunda.remove()
    if(confirm){
        window.print()
    }
    
}