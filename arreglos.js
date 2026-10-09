let arregloIzquierdo = [];
let arregloDerecha=[];

function agregarEdad(){
    let cmpTxt=document.getElementById("edad");
    let txtStr=cmpTxt.value;
    let txtInt=parseInt(txtStr);

    arregloIzquierdo.push(txtInt);
    pintarArregloDerecha();
    pintarArregloIzquierda();
    
}

function pintarArregloIzquierda(){
    let cmpTabla=document.getElementById("tablaIzquierda");
    let contenido="";
    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + arregloIzquierdo[i] + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ");'>Eliminar</button></td>";
        contenido += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ");'>➜</button></td>";
        contenido += "</tr>";
    }

    cmpTabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice){
    arregloIzquierdo.splice(indice,1);
    pintarArregloIzquierda();
}

function moverHaciaDerecha(indice){
    let extraido = arregloIzquierdo[indice];
    arregloDerecha.push(extraido);
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function pintarArregloDerecha(){
    let cmpTabla = document.getElementById("tablaDerecha");
    let contenido = "";
    for (let i = 0; i < arregloDerecha.length; i++) {
        contenido += "<tr>";
        contenido += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        contenido += "<td>" + arregloDerecha[i] + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ");'>Eliminar</button></td>";
        contenido += "</tr>";
    }
    cmpTabla.innerHTML = contenido;
}

function eliminarDerecho(indice){
    arregloDerecha.splice(indice,1);
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice){
    let extraido = arregloDerecha[indice];
    arregloIzquierdo.push(extraido);
    arregloDerecha.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
