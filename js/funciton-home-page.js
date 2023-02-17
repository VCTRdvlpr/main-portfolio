var primeiraTela = document.getElementById("title01");
var segundaTela = document.getElementById("step01");
var avatarSmile = document.getElementById("avatar-smile");
var avatarSerious = document.getElementById("avatar-serious");

function trocarTela(){

    primeiraTela.style.display="none";
    segundaTela.style.display="flex";
    avatarSmile.style.display="flex";
    avatarSerious.style.display="none";    
            
};

function voltarTela(){

    segundaTela.style.display="none";
    primeiraTela.style.display="inline";
    avatarSerious.style.display="flex";
    avatarSmile.style.display="none";            
};
