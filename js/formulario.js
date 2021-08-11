$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})
$('textarea[name=mensagem]').focus(function(){
    resetarCampoInvalido($(this));
})

let alert = document.querySelector("#alert");
$('#alert').css('display','none');
let form = document.querySelector("#contactForm");
form.addEventListener("submit", function(event){
    event.preventDefault();    
    let nome = $('input[name=nome]').val();    
    let email = $('input[name=email]').val(); 
    let assunto = $('input[name=assunto]').val(); 
    let mensagem = $('textarea[name=mensagem]').val(); 
    
    if (verificarNome(nome) == false) {
        aplicarCampoInvalido($('input[name=nome]'));
    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
    }else if(verificarAssunto(assunto) == false){
        aplicarCampoInvalido($('input[name=assunto]'));
    }else if(verificarMensagem(mensagem) == false){
        aplicarCampoInvalido($('textarea[name=mensagem]'));
    }else{
        $('#alert').css('display','block');   
        resetarCampo($('input[name=nome]'));
        resetarCampo($('input[name=email]'));
        resetarCampo($('input[name=assunto]'));
        resetarCampo($('textarea[name=mensagem]'));     
    }   
})
function aplicarCampoInvalido(el){
    el.css('color','red');
    el.css('border','1px solid red');
    el.val('Campo Inválido!');
    //el.data('invalido', 'true');
}
function resetarCampoInvalido(el){
    el.css('color','black');
    el.css('border','1px solid white');
    el.val('');
}
function resetarCampo(el){
    el.css('color','black');
    el.css('border','1px solid white');
    el.val('');
}
function verificarNome(nome){
    if (nome == '') {
        return false;
    }
    let amount = nome.split(' ').length;
    let spliStr = nome.split(' ');
    if (amount >= 2) {
        for (let i = 0; i < amount; i++) {
            if (spliStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                
            } else {
                return false;
            }            
        }
    } else {
        return false;
    }
}
function verificarEmail(email){
    if (email == '') {
        return false;
    }
    if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false;                
    }
}
function verificarAssunto(assunto){
    if (assunto == '') {
        return false;
    }    
}
function verificarMensagem(mensagem){
    if (mensagem == '') {
        return false;
    }    
}
function closeAlert(){
    this.alert = false;    
}
function closeAlertD(){
    this.alertD = false;
}
