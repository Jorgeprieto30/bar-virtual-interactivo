function selectDrink(drink) {
  // Ocultar todas las opciones de bebida excepto la seleccionada
  var drinkOptions = document.querySelectorAll('.drinkOption');
  drinkOptions.forEach(function(option) {
      if (option.textContent !== drink) {
          option.classList.add('hideMenuOptions');
      }
  });

  // Obtener el elemento de video del barman
  var video = document.getElementById('barmanVideo');

  // Obtener la ruta del video específico de la bebida seleccionada
  var videoPath = getVideoPath(drink);

  // Cambiar la fuente del video del barman para el video específico de la bebida seleccionada
  video.src = videoPath;

  // Reiniciar el video para que comience desde el principio
  video.load();
  video.play();

  // Mostrar los ingredientes correspondientes a la bebida seleccionada de manera gradual
  showIngredients(drink);

  // Mostrar el botón de volver
  var backButton = document.getElementById('backButton');
  backButton.style.display = 'block';
}

function showAllDrinks() {
  // Mostrar todas las opciones de bebida
  var drinkOptions = document.querySelectorAll('.drinkOption');
  drinkOptions.forEach(function(option) {
      option.classList.remove('hideMenuOptions');
  });

  // Ocultar la lista de ingredientes
  var ingredientsList = document.getElementById('ingredientsList');
  ingredientsList.style.display = 'none';

  // Mostrar el video del barman esperando
  var video = document.getElementById('barmanVideo');
  video.src = 'videos/barman_esperando.mov';
  video.load();
  video.play();

  // Ocultar el botón de volver
  var backButton = document.getElementById('backButton');
  backButton.style.display = 'none';
}

function getVideoPath(drink) {
  switch (drink) {
      case 'Mojito':
          return 'videos/mojito.mov';
      case 'Caipirinha':
          return 'videos/caipirinha.mov';
      case 'Margarita':
          return 'videos/margarita.mov';
      case 'Pisco Sour':
          return 'videos/pisco_sour.mov';
      case 'White Russian':
      case 'Cosmopolitan':
          return 'videos/cosmopolitan.mov';
      case 'Tom Collins':
          return 'videos/tom_collins.mov';
      case 'Sangria':
          return 'videos/sangria.mov';
      case 'Moscow Mule':
          return 'videos/moscow_mule.mov';
      case 'Bloody Mary':
          return 'videos/bloody_mary.mov';
      case 'Aperol Spritz':
          return 'videos/aperol_spritz.mov';
      case 'Martini':
          return 'videos/martini.mov';
      case 'Mai Tai':
          return 'videos/mai_tai.mov';
      default:
          return 'videos/barman_esperando.mov';
  }
}


function showIngredients(drink) {
  // Obtener la lista de ingredientes
  var ingredientsList = document.getElementById('ingredientsList');

  // Limpiar la lista de ingredientes antes de mostrar los nuevos
  ingredientsList.innerHTML = '';

  // Definir los ingredientes para cada bebida
    var ingredients = {
      'Mojito': ['Ron blanco', 'Hierbabuena', 'Azúcar', 'Zumo de limón', 'Agua con gas', 'Hielo picado'],
      'Caipirinha': ['Cachaça', 'Limón', 'Azúcar', 'Hielo'],
      'Margarita': ['Tequila', 'Triple sec', 'Zumo de limón', 'Sal', 'Hielo'],
      'Pisco Sour': ['Pisco', 'Jugo de limón', 'Jarabe de goma', 'Clara de huevo', 'Amargo de angostura'],
      'White Russian': ['Vodka', 'Licor de café', 'Crema de leche', 'Hielo'],
      'Cosmopolitan': ['Vodka', 'Triple Sec', 'Jugo de arándano', 'Jugo de lima'],
      'Tom Collins': ['Ginebra', 'Jugo de limón', 'Jarabe simple', 'Agua con gas'],
      'Sangria': ['Vino tinto', 'Brandy', 'Jugo de naranja', 'Frutas variadas'],
      'French 75': ['Ginebra', 'Jugo de limón', 'Jarabe simple', 'Champán'],
      'Mint Julep': ['Bourbon', 'Menta', 'Azúcar', 'Agua'],
      'Moscow Mule': ['Vodka', 'Cerveza de jengibre', 'Jugo de limón'],
      'Bloody Mary': ['Vodka', 'Zumo de tomate', 'Limón', 'Salsa Worcestershire', 'Tabasco', 'Sal y pimienta'],
      'Aperol Spritz': ['Aperol', 'Prosecco', 'Soda', 'Rodaja de naranja'],
      'Martini': ['Ginebra', 'Vermut seco', 'Aceituna o twist de limón'],
      'Mai Tai': ['Ron blanco', 'Ron oscuro', 'Licor de naranja', 'Jugo de lima', 'Jarabe de almendra']
  };

  if (ingredients.hasOwnProperty(drink)) {
      var delay = 100; // Retraso inicial
      ingredients[drink].forEach(function(ingredient, index) {
          setTimeout(function() {
              var li = document.createElement('li');
              li.textContent = ingredient;
              li.classList.add('ingredient');
              ingredientsList.appendChild(li);
              setTimeout(function() {
                  li.style.opacity = 1;
              }, 50);
          }, delay * index);
      });

      ingredientsList.style.display = 'block';
  } else {
      ingredientsList.style.display = 'none';
  }
}

// Aplicar retraso a las animaciones de las opciones de bebida
document.addEventListener('DOMContentLoaded', function() {
  var drinkOptions = document.querySelectorAll('.drinkOption');
  drinkOptions.forEach(function(option, index) {
    option.style.animationDelay = `${index * 0.2}s`;
  });
});
