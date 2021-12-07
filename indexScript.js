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

//Función hecha para resolver el parcial colocando la info en un label y 
//luego colocandole un listener para que escuche el evento y cambien de color
  function chage(){
     //
     const containerJavaScript = document.getElementById('javaScriptChange');
     const containerPython = document.getElementById('pythonChange');
     const containerJava = document.getElementById('javaChange');
     const containerC = document.getElementById('cChange');
     const containerPHP = document.getElementById('phpChange');
     const containerCchar = document.getElementById('cCharChange');
     const containerGo = document.getElementById('goChange');
     const containerScala = document.getElementById('scalaChange');
     const containerKotlin = document.getElementById('kotlinChange');
     const containerswift = document.getElementById('swiftChange');

     const labelPython = document.getElementById('PythonLabelChange');
     const labelJava = document.getElementById('javaLabelChange');
     const labeLc = document.getElementById('cLabelChange');
     const labeLPHP = document.getElementById('PHPLabelChange');
     const labeLcChar = document.getElementById('cCharLabelChange');
     const labeLGo = document.getElementById('goLabelChange');
     const labeLScala = document.getElementById('scalaLabelChange');
     const labeLKotlin = document.getElementById('kotlinLabelChange');
     const labeLswift = document.getElementById('swiftLabelChange');


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
      labeLcChar.classList.toggle("labelChangeColor");
      containerCchar.classList.toggle("changeElement");
      labeLcChar.classList.toggle("colorLabel");
     });
     containerGo.addEventListener('click', () => { 
      containerGo.classList.toggle("changeColor");
      labeLGo.classList.toggle("labelChangeColor");
      containerGo.classList.toggle("changeElement");
      labeLGo.classList.toggle("colorLabel");
     });
     containerScala.addEventListener('click', () => { 
      containerScala.classList.toggle("changeColor");
      labeLScala.classList.toggle("labelChangeColor");
      containerScala.classList.toggle("changeElement");
      labeLScala.classList.toggle("colorLabel");
     });
     containerKotlin.addEventListener('click', () => { 
      containerKotlin.classList.toggle("changeColor");
      labeLKotlin.classList.toggle("labelChangeColor");
      containerKotlin.classList.toggle("changeElement");
      labeLKotlin.classList.toggle("colorLabel");
     });
     containerswift.addEventListener('click', () => { 
      containerswift.classList.toggle("changeColor");
      labeLswift.classList.toggle("labelChangeColor");
      containerswift.classList.toggle("changeElement");
      labeLswift.classList.toggle("colorLabel");
     });


  }


  //Función para capturar la información:
  //llamando la clase vect del html que le coloqué a los inputs  con getElementById
  //y se guargan en el array
  var Captured = function(){
    let information = document.getElementsByClassName("vectorArray"),
        saveArray = [];         
    for (var i = 0; i < information.length; i++) {    
      saveArray[i] = information[i].value;
        console.log (information[i].value);     
        console.log (information[i].length); 
        }       
    }

  //Función para mostrar el contenido del array
  /*var show = function(){
    for (var i = 0; i < saveArray.length; i++) {                    
      document.write (saveArray[i]);
        }
    }*/

  
  
  //Llamando las funciones
  chage();
  Captured();
  //show();