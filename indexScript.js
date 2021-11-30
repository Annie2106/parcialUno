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
   
   /*getContent.innerHTML +=  "<div>" +data.name+data.lastNames+data.email+data.emailVerify+data.phone+data.address+data.birth+data.height+data.password+data.passwordReview+data.bio+"</div>";   */
   
   getContent.innerHTML +=  "<div>" +data.lastNames+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.email+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.emailVerify+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.phone+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.address+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.birth+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.height+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.password+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.passwordReview+"</div>"; 
   getContent.innerHTML +=  "<div>" +data.textarea+"</div>"; 

   
   
});


  function chage(){
     //
     const containerJavaScript = document.getElementById('javaScriptChange');
     const containerPython = document.getElementById('pythonChange');
     const containerJava = document.getElementById('javaChange');
     const containerC = document.getElementById('cChange');

     const labelJavaScript = document.getElementById('javaScriptLabelChange');
     const labelPython = document.getElementById('PythonLabelChange');
     const labelJava = document.getElementById('javaLabelChange');
     const labeLc = document.getElementById('cLabelChange');


     //
     containerJavaScript.addEventListener('click', () => { 
      containerJavaScript.classList.toggle("changeColor");
      labelJavaScript.classList.toggle("labelChangeColor");
      containerJavaScript.classList.toggle("changeElement");
       labelJavaScript.classList.toggle("colorLabel");
     });
     containerPython.addEventListener('click', () => { 
      containerPython.classList.toggle("changeColor");
      labelPython.classList.toggle("labelChangeColor");
      containerPython.classList.toggle("changeElement");
       labelPython.classList.toggle("colorLabel");
     });
     containerJava.addEventListener('click', () => { 
      containerJava.classList.toggle("changeColor");
      labelJava.classList.toggle("labelChangeColor");
      containerJava.classList.toggle("changeElement");
       labelJava.classList.toggle("colorLabel");
     });


  }
  
  chage();