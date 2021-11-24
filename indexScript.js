console.log("Script loader!");
var form1 = document.getElementById("form");
var getContent = document.getElementById("form-group") 

form1.addEventListener("submit", function(event){
   var name = form1.elements["name"].value
   event.preventDefault();
   //const data = Object.fromEntries(new FormData(event.target).entries()); --> Así lo dejó el profe
   console.log(event);
   console.log("submit");
   //console.log(data);  --> Así lo dejó el profe
   getContent.innerHTML +=  "<h1>" +data.names+data.lastNames+data.inputEmail3+data.inputemailVerify+data.phone+data.birth+data.height+data.password+data.passwordReview+data.bio+"</h1>";
   
   /*getContent.innerHTML +=  data.names;
   getContent.innerHTML +=  data.lastName;
   getContent.innerHTML +=  data.inputEmail3;
   getContent.innerHTML += data.inputemailVerify;
   getContent.innerHTML += data.phone;
   getContent.innerHTML += data.birth;
   getContent.innerHTML += data.height;
   getContent.innerHTML += data.password;
   getContent.innerHTML += data.passwordReview;
   getContent.innerHTML += data.bio;*/






});


  //function informationKeep(){
   //const data = Object.fromEntries(new FormData(event.target).entries());
  // const info = document.getElementById("information");
  // const paragraph = document.getElementById("show")
   //paragraph.innerHTML = `${info }`;
  //}




