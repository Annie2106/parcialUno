console.log("Script loader!");
var form1 = document.getElementById("form");
var getContent = document.getElementById("form-info") 

form1.addEventListener("submit", function(event){
   var name = form1.elements["name"].value
   event.preventDefault();
   const data = Object.fromEntries(new FormData(event.target).entries());// --> Así lo dejó el profe
   console.log(event);
   console.log("submit");
   console.log(data);   //-->Así lo dejó el profe
   getContent.innerHTML +=  "<div>" +data.names+data.lastNames+data.email+data.inputemailVerify+data.phone+data.birth+data.height+data.password+data.passwordReview+data.bio+"</div>";
   
   
   
});


  /*function informationKeep(){
  const data = Object.fromEntries(new FormData(event.target).entries());
  const info = document.getElementById("information");
  const paragraph = document.getElementById("show")
  paragraph.innerHTML = `${info }`;
  }
  
  
  la llamaba con onclick en el botón*/




