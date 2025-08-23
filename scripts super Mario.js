const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")







function mostrarform (){
    
    form.style.transition = "left 1.6s cubic-bezier(0.77, 0, 0.175, 1)";
    form.style.left ="50%"
    form.style.transform ="translateX(-50%)"
    mascara.style.visibility="visible"
}

function esconderform (){

    form.style.transition = "left 1.6s cubic-bezier(0.77, 0, 0.175, 1)";
    form.style.left ="-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility="hidden"
}