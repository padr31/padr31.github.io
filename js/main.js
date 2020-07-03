window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

function greet(){
    var name = document.getElementById("name").value; 
    document.getElementById("display").innerHTML = "Hello " + name + "!"
}