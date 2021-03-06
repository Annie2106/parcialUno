console.log("Script loader!");
var form1 = document.getElementById("form");
var getContent = document.getElementById("form-info")

form1.addEventListener("submit", function (event) {
  var name = form1.elements["name"].value
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());// --> Así lo dejó el profe
  console.log(event);
  console.log("submit");
  console.log(data);   //-->Así lo dejó el profe

  //------------------------------------------------------------------------

  //Agregando el contenido a un contenedor en la página web


  /*getContent.innerHTML +=  "<div>" +data.name+data.lastNames+data.email+data.emailVerify+data.phone+data.address+data.birth+data.height+data.password+data.passwordReview+data.bio+"</div>";   */

  getContent.innerHTML += "<div>" + data.name + "</div>";
  getContent.innerHTML += "<div>" + data.lastNames + "</div>";
  getContent.innerHTML += "<div>" + data.email + "</div>";
  getContent.innerHTML += "<div>" + data.emailVerify + "</div>";
  getContent.innerHTML += "<div>" + data.phone + "</div>";
  getContent.innerHTML += "<div>" + data.address + "</div>";
  getContent.innerHTML += "<div>" + data.birth + "</div>";
  getContent.innerHTML += "<div>" + data.height + "</div>";
  getContent.innerHTML += "<div>" + data.password + "</div>";
  getContent.innerHTML += "<div>" + data.passwordReview + "</div>";
  getContent.innerHTML += "<div>" + data.textarea + "</div>";



});

//------------------------------------------------------------------------

//Etiqueta con cambio de color

//Función hecha para resolver el parcial colocando la info en un label y 
//luego colocandole un listener para que escuche el evento y cambien de color
function change() {
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

  const labelJavaScript = document.getElementById('javaScriptLabelChange');
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
change();



//Vector

/** con el formulario q estamos trabajamos vamos a almacenarlo en un vector 
y al limpiar el formulario > el vector crece al darle submit 
pero sin actualizar la página, solo quedaría en la memo ram del compu pero 
al recargar se pierde la info */

//Agregando elemntos al vector

let data = [];

function addElementsOnVector() {
  let nameInformation = document.getElementById("name").value;
  let lastNameInformation = document.getElementById("lastNames").value;
  let emailInformation = document.getElementById("email").value;
  let emailVerifyInformation = document.getElementById("emailVerify").value;
  let phoneInformation = document.getElementById("address").value;
  let addressInformation = document.getElementById("address").value;
  let birthInformation = document.getElementById("birth").value;
  let heightInformation = document.getElementById("height").value;
  let passwordInformation = document.getElementById("password").value;
  let passwordReviewInformation = document.getElementById("passwordReview").value;
  let textareaInformation = document.getElementById("textarea").value;
  data.push(nameInformation);
  data.push(lastNameInformation);
  data.push(emailInformation);
  data.push(emailVerifyInformation);
  data.push(phoneInformation);
  data.push(addressInformation);
  data.push(birthInformation);
  data.push(heightInformation);
  data.push(passwordInformation);
  data.push(passwordReviewInformation);
  data.push(textareaInformation);
}

//Mostrando elementos del vector
function showVector() {
  let ans = document.getElementById('result');
  result.innerHTML = '';
  for (const information of data) {
    let informationOnParagraph = document.createElement('p');
    informationOnParagraph.innerHTML = information;
    //Agregamos informationOnParagraph
    result.appendChild(informationOnParagraph);

  }
}
showVector();



//------------------------------------------------------------------------




//------------------------------------------------------------------------

const boton = document.querySelector('#showInformation');
boton.addEventListener('click', () => {

  function saveInformationFromLocalStorage() {


    /**Además de almacenar la data, se tiene que mostrar en un contenedor
   cada vez q se grabe un nuevo campo se va ir crediendo ese contenedor porq va a tener más data 
   los datos son acumulativos por más q se cierre el navegador y se actualice la página deben persistir y seguir mostrandose ahí
   lo q ya se creo debe seguir almacenado al volverlo abrir */
    /*Mostrar datos almacenados*/
    let nameVar = document.getElementById("name").value;
    let lastNamesVar = document.getElementById("lastNames").value;
    let emailVar = document.getElementById("email").value;
    let emailVerifyVar = document.getElementById("emailVerify").value;
    let phoneVar = document.getElementById("phone").value;
    let addressVar = document.getElementById("address").value;
    let birthVar = document.getElementById("birth").value;
    let heightVar = document.getElementById("height").value;
    let passwordVar = document.getElementById("password").value;
    let passwordReviewVar = document.getElementById("passwordReview").value;
    let textAreaBioVar = document.getElementById("textarea").value;

    localStorage.setItem('Name', nameVar);
    localStorage.setItem('LastName', lastNamesVar);
    localStorage.setItem('Email', emailVar);
    localStorage.setItem('EmailVerify', emailVerifyVar);
    localStorage.setItem('Phone', phoneVar);
    localStorage.setItem('Address', addressVar);
    localStorage.setItem('Birth', birthVar);
    localStorage.setItem('Height', heightVar);
    localStorage.setItem('Password', passwordVar);
    localStorage.setItem('PasswordReview', passwordReviewVar);
    localStorage.setItem('TextAreaBio', textAreaBioVar);

  }

  saveInformationFromLocalStorage()



function showInformationFromLocalStorage() {
  /*Obtener datos almacenados*/
  let name = localStorage.getItem('Nombre');
  let lastNames = localStorage.getItem('LastName');
  let email = localStorage.getItem('Email');
  let emailVer = localStorage.getItem('EmailVerify');
  let phone = localStorage.getItem('Phone');
  let address = localStorage.getItem('Address');
  let birth = localStorage.getItem('Birth');
  let height = localStorage.getItem('Height');
  let password = localStorage.getItem('Password');
  let passwordReview = localStorage.getItem('PasswordReview');
  let textAreaBio = localStorage.getItem('TextAreaBio');

  document.getElementById("name").innerHTML = name;
  document.getElementById("lastNames").innerHTML = lastNames;
  document.getElementById("email").innerHTML = email;
  document.getElementById("emailVer").innerHTML = emailVer;
  document.getElementById("phone").innerHTML = phone;
  document.getElementById("address").innerHTML = address;
  document.getElementById("birth").innerHTML = birth;
  document.getElementById("height").innerHTML = height;
  document.getElementById("password").innerHTML = password;
  document.getElementById("passwordReview").innerHTML = passwordReview;
  document.getElementById("textAreaBio").innerHTML = textAreaBio;
}

})

//Mostrando elementos del localStorage en la tabla
function showInformationFromLocalOnTable() {
  let ans = document.getElementById('showInformation');
  
  for (const information of data) {
   

  }
}
showInformationFromLocalOnTable();