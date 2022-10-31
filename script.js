let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("github");
        habilidades[4].classList.add("git");
    }
}

const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#gmail-submit');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    $buttonMailTo.setAttribute('href',`mailto:dimasefren3@gmail.com?subject=${form.get('name')} ${form.get('tema')}&body= Email: ${form.get('gmail')} Tel: ${form.get('num-tel')} ${form.get('mensaje')}`)
    $buttonMailTo.click();
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 