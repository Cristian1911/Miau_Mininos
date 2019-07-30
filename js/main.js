let secciones = [];
window.onload = init;


function init(){
    secciones[0] = document.getElementById("section_0");
    secciones[1] = document.getElementById("section_1");
    secciones[2] = document.getElementById("section_2");
    secciones[3] = document.getElementById("section_3");
    secciones[4] = document.getElementById("section_4");
}


function hide(){
    if(secciones[0].classList.contains("hide")){
        secciones[0].classList.remove("hide");
    }
    else{
        secciones[0].classList.add("hide");
    }
}

function changeSection(target){
    let id = target.id.split("_")[1];
    for(let i=0;i<secciones.length;i++){
        secciones[i].classList.add("hide");
    }
    secciones[id].classList.remove("hide");
}

function goMain(){
    for(let i=0;i<secciones.length;i++){
        secciones[i].classList.add("hide");
    }
    secciones[0].classList.remove("hide")
}
