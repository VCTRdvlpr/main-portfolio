function readMore(){
    var expandir=document.getElementById("about-left");
    var listHard=document.getElementById("hard-skills-list");
    var btnHardSkills=document.getElementById("about-left");
    

    if(expandir.style.display === "inline"){
        expandir.style.display="grid";
        listHard.style.display="none";  
        btnHardSkills.innerHTML="Hard Skills";      
    }
    else{
        expandir.style.display="inline";
        listHard.style.display="grid";   
        btnHardSkills.innerHTML="Hard Skills";            
    }
}