function readMoreSoft(){
    var expandir=document.getElementById("about-right");
    var listHard=document.getElementById("soft-skills-list");
    var btnHardSkills=document.getElementById("about-right");
    

    if(expandir.style.display === "inline"){
        expandir.style.display="grid";
        listHard.style.display="none";  
        btnHardSkills.innerHTML="Soft Skills";      
    }
    else{
        expandir.style.display="inline";
        listHard.style.display="grid";   
        btnHardSkills.innerHTML="Soft Skills"     
    }
}