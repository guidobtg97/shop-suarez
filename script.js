window.onload = function() {
  renderHeader();
};

function renderHeader() {
  var headerContainer = document.getElementById('header-container');
  
  var logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Candy Shop';
  
  var nav = document.createElement('nav');
  var ul = document.createElement('ul');
  
  var navItems = [
    { text: 'INICIO', link: 'index.html' },
    { text: 'TIENDA', link: 'store2.html' },
    { text: 'CONTACTO', link: '#' },
    { text: 'CARRITO', link: '#' }
  ];
  
  navItems.forEach(function(item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.text;
    
    li.appendChild(a);
    ul.appendChild(li);
  });
  
  nav.appendChild(ul);
  
  headerContainer.appendChild(logo);
  headerContainer.appendChild(nav);
}

window.addEventListener('scroll', function() {
  var headerContainer = document.getElementById('header-container');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    headerContainer.classList.add('scroll');
  } else {
    headerContainer.classList.remove('scroll');
  }
});


  ////SLIDEEEEEERRRRRR








/// Array de imágenes
const images = [
  'assets/chocolates.jpg',
  'assets/confites.jpg',
  'assets/gomitas.jpg'
];

// Tiempo de duración entre las imágenes (en milisegundos)
const intervalTime = 3000;

// Índice de la imagen actual
let currentIndex = 0;

// Función para cambiar la imagen activa
function changeImage(index) {
  const slider = document.getElementById('slider');
  slider.style.backgroundImage = `url(${images[index]})`;
}

// Función para cambiar a la siguiente imagen
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  changeImage(currentIndex);
  setActiveCircle(currentIndex);
}

// Obtener los elementos de los controles del slider
const sliderControls = document.getElementById('slider-controls');
const circles = [];

// Crear los círculos de navegación
for (let i = 0; i < images.length; i++) {
  const circle = document.createElement('span');
  circle.addEventListener('click', () => {
    changeImage(i);
    setActiveCircle(i);
  });
  circles.push(circle);
  sliderControls.appendChild(circle);
}

// Función para establecer el círculo activo
function setActiveCircle(index) {
  circles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

// Función para iniciar el slider
function startSlider() {
  changeImage(currentIndex);
  setActiveCircle(currentIndex);
  setInterval(nextImage, intervalTime);
}

// Iniciar el slider cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
  startSlider();
  // Tu código existente aquí...
});



/// CONTACT

function renderContactForm() {
  const contactSection = document.getElementById('contact');

  // Crear elementos para el formulario
  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  // Crear elementos para los datos de contacto
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';

  const phoneNumber = document.createElement('p');
  phoneNumber.innerHTML = '<strong>Teléfono:</strong> 2922 223344.';

  const email = document.createElement('p');
  email.innerHTML = '<strong>Correo:</strong> candysuarez@gmail.com';

  const address = document.createElement('p');
  address.innerHTML = '<strong>Dirección:</strong>  San Martín 779 e/ Garay y Moreno.';

  const hours = document.createElement('p');
  hours.innerHTML = `<strong>Horarios:</strong><br>Lunes a Sábado 10 - 13 hs / 17 - 22 hs<br>Domingo: 17 - 22 hs`;

  // Agregar elementos al DOM
  contactInfo.appendChild(phoneNumber);
  contactInfo.appendChild(email);
  contactInfo.appendChild(address);
  contactInfo.appendChild(hours);

  formContainer.appendChild(contactInfo);

  // Crear elemento para la imagen
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const image = document.createElement('img');
  image.src = 'assets/chupaletas.jpg';
  image.alt = 'Chupaletas';

  imageContainer.appendChild(image);

  // Agregar elementos al contenedor principal
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';

  mainContainer.appendChild(imageContainer);
  mainContainer.appendChild(formContainer);

  contactSection.appendChild(mainContainer);
}

// Llamar a la función para renderizar el formulario de contacto y la imagen
renderContactForm();







/// FOOTER


  // Obtener el elemento del footer
const footer = document.getElementById('footer');

// Crear los elementos contenedores de texto
const textContainer1 = document.createElement('div');
const textContainer2 = document.createElement('div');
const textContainer3 = document.createElement('div');

// Agregar las clases de estilo a los contenedores
textContainer1.classList.add('footer-text');
textContainer2.classList.add('footer-text');
textContainer3.classList.add('footer-text');

// Crear los nodos de texto
const text1 = document.createTextNode('Tienda online de Candy Shop (Coronel Suárez)');
const text2 = document.createTextNode('2023. Todos los derechos reservados');
const text3 = document.createTextNode('@Powered by battidev');

// Agregar los nodos de texto a los contenedores
textContainer1.appendChild(text1);
textContainer2.appendChild(text2);
textContainer3.appendChild(text3);

// Agregar los contenedores al footer
footer.appendChild(textContainer1);
footer.appendChild(textContainer2);
footer.appendChild(textContainer3);

  

  
  