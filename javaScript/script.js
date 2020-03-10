
var frase = document.querySelector(".typewriter");



$(function(){
    typeWrite(frase);
    nav();
});


function typeWrite(frase){
        const texto = frase.innerHTML.split('');
        frase.innerHTML = '';
        texto.forEach(function(letra, i){
            setTimeout(function(){
                frase.innerHTML += letra;
            }, 50 * i)});
    /*setTimeout(function(){
        
    })*/
}

function nav(){
    $('nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).setAttribute('href'),
                targetOffset = $(id).offset().top;	
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
}
/*function verificaEmail(){
    var email = $(".email");
    var enviar = $(".enviar");
    if(email.val() == 0){
            enviar.attr("disabled", true);
            enviar.addClass("desabilitado");
    }
    email.on("input", function(){
        if(email.val() == 0){
            enviar.attr("disabled", true);
            enviar.addClass("desabilitado");
        }else{
            enviar.removeClass("desabilitado");
        }
    
    });
    
}*/