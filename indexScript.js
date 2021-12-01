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
     const containerPHP = document.getElementById('phpChange');
     const containerCchar = document.getElementById('cCharChange');
     const containerGo = document.getElementById('goChange');
     const containerGo = document.getElementById('scalaChange');
     const containerKotlin = document.getElementById('kotlinChange');
     const containerSwift = document.getElementById('swiftChange');

     const labelPython = document.getElementById('PythonLabelChange');
     const labelJava = document.getElementById('javaLabelChange');
     const labeLc = document.getElementById('cLabelChange');
     const labeLPHP = document.getElementById('PHPLabelChange');
     const labelCchar = document.getElementById('cCharLabelChange');
     const labelGo = document.getElementById('goLabelChange');
     const labelScala = document.getElementById('scalaLabelChange');
     const labelKotlin = document.getElementById('kotlinLabelChange');
     const labelSwift = document.getElementById('swiftLabelChange');


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
     containerC.addEventListener('click', () => { 
      containerC.classList.toggle("changeColor");
      cLabelChange.classList.toggle("labelChangeColor");
      containerC.classList.toggle("changeElement");
      cLabelChange.classList.toggle("colorLabel");
     });
     containerPHP.addEventListener('click', () => { 
      containerPHP.classList.toggle("changeColor");
      labeLPHP.classList.toggle("labelChangeColor");
      containerPHP.classList.toggle("changeElement");
      labeLPHP.classList.toggle("colorLabel");
     });
     containerCchar.addEventListener('click', () => { 
      containerCchar.classList.toggle("changeColor");
      labelCchar.classList.toggle("labelChangeColor");
      containerCchar.classList.toggle("changeElement");
      labelCchar.classList.toggle("colorLabel");
     });
     containerGo.addEventListener('click', () => { 
      containerGo.classList.toggle("changeColor");
      labelGo.classList.toggle("labelChangeColor");
      containerGo.classList.toggle("changeElement");
      labelGo.classList.toggle("colorLabel");
     });
     containerGo.addEventListener('click', () => { 
      containerGo.classList.toggle("changeColor");
      scalaLabelChange.classList.toggle("labelChangeColor");
      containerGo.classList.toggle("changeElement");
      scalaLabelChange.classList.toggle("colorLabel");
     });
     containerKotlin.addEventListener('click', () => { 
      containerKotlin.classList.toggle("changeColor");
      labelKotlin.classList.toggle("labelChangeColor");
      containerKotlin.classList.toggle("changeElement");
      labelKotlin.classList.toggle("colorLabel");
     });
     containerSwift.addEventListener('click', () => { 
      containerSwift.classList.toggle("changeColor");
      labelSwift.classList.toggle("labelChangeColor");
      containerSwift.classList.toggle("changeElement");
      labelSwift.classList.toggle("colorLabel");
     });

  }
  chage();