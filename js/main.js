let secciones = [];
window.onload = init;


function init(){
    secciones[1] = document.getElementById("seccion_1");
}


function ocultar(){
    if(secciones[1].classList.contains("ocultar")){
        secciones[1].classList.remove("ocultar");
    }
    else{
        secciones[1].classList.add("ocultar");
    }
}
