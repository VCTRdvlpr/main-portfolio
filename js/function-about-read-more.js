function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("more");
    var btnLeiaMais=document.getElementById("btn-leia-mais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";        
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Ocultar"; 
    }
}
