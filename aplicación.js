//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let cuentas = document.getElementById("cuentas");
crearBarra(cuentas);
let Gestión = document.getElementById("Gestión");
crearBarra(Gestión);
let Experto = document.getElementById("Experto");
crearBarra(Experto);
let Organización = document.getElementById("Organización");
crearBarra(Organización);
let Actas = document.getElementById("Actas");
crearBarra(Actas);
let Preparación = document.getElementById("Preparación");
crearBarra(Preparación);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalcuentas = setInterval(function(){
            pintarBarra(cuentas, 16, 0, intervalcuentas);
        },100);
        const intervalGestión = setInterval(function(){
            pintarBarra(Gestión, 11, 1, intervalGestión);
        },100);
        const intervalExperto = setInterval(function(){
            pintarBarra(Experto, 11, 2, intervalExperto);
        },100);
        const intervalOrganización = setInterval(function(){
            pintarBarra(Organización, 15, 3, intervalOrganización);
        },100);
        const intervalActas = setInterval(function(){
            pintarBarra(Actas, 16, 4, intervalActas);
        },100);
        const intervalPreparación = setInterval(function(){
            pintarBarra(Preparación, 11, 5, intervalPreparación);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}