copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");




function gfg_Run() { 

     pwd =  Math.random().toString(36).slice(2) + Math.random().toString(36) 
                .toUpperCase().slice(2); 
                document.getElementById("ran_pass").value = pwd;              
}  

function copy(){
    document.getElementById("ran_pass").select();
    document.execCommand("copy");
    alert("Copied to the clipboard");
  }


          
