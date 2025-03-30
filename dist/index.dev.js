"use strict";

//gestion de la bar de navigation
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".divlink").forEach(function (button, index) {
    button.addEventListener("click", function () {
      var content = document.querySelectorAll(".collapse")[index]; // Toggle l'affichage du contenu

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.navlink').forEach(function (button, index) {
    button.addEventListener("click", function () {
      console.log('link clicked');
      var contentnav = document.querySelectorAll('.linkContent')[index];

      if (contentnav.style.display === "block") {
        contentnav.style.display = 'none';
        console.log('found');
      } else {
        contentnav.style.display = "block";
        console.log('find');
      }
    });
  });
}); //gestion des button dans la section quesion posee

function genereForfait() {
  var reponse, _loop, i;

  return regeneratorRuntime.async(function genereForfait$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('forfait.json'));

        case 2:
          reponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(reponse.json());

        case 5:
          forfait = _context.sent;

          _loop = function _loop(i) {
            var element = forfait[i];
            var forfaitname = document.createElement('h5');
            forfaitname.innerText = element.name;
            var forfaitContent = document.createElement('p');
            forfaitContent.innerText = element.content;
            var forfaitPrix = document.createElement('h5');
            forfaitPrix.innerText = element.prix;
            var forfaitHead = document.createElement('div');
            forfaitHead.appendChild(forfaitname);
            forfaitHead.appendChild(forfaitContent);
            forfaitHead.appendChild(forfaitPrix);
            forfaitHead.style.backgroundColor = "blue";
            forfaitHead.style.color = "white";
            forfaitHead.style.fontWeight = "500";
            var divForfait = document.createElement('div');
            divForfait.classList.add("col-sm-12", "col-md-12", "col-lg-3"); // Créer la liste des attributs

            var forfaitAtributeList = document.createElement('ul');
            forfaitAtributeList.style.width = "100";
            forfaitAtributeList.style.listStylePosition = "inside";
            element.atribute.forEach(function (attr) {
              var li = document.createElement('li');
              li.innerText = attr;
              forfaitAtributeList.appendChild(li);
            });
            var forfaitButtom = document.createElement("div");
            forfaitButtom.appendChild(forfaitAtributeList);
            divForfait.appendChild(forfaitHead);
            divForfait.appendChild(forfaitButtom); // Ajout de la liste des attributs

            var sectionForfait = document.querySelector('#forfait');
            sectionForfait.appendChild(divForfait);
          };

          for (i = 0; i < forfait.length; i++) {
            _loop(i);
          }

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

genereForfait();

function person() {
  var renderCarousel, response, persons, slideContainer, index, prevBtn, nextBtn;
  return regeneratorRuntime.async(function person$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          // Index de la première carte visible
          renderCarousel = function renderCarousel() {
            slideContainer.innerHTML = ""; // Effacer l'ancien affichage

            for (var i = 0; i < 2; i++) {
              // Toujours afficher 2 cartes
              var personIndex = (index + i) % persons.length; // Permet une boucle infinie

              var elementperson = persons[personIndex];
              var personName = document.createElement('h5');
              personName.innerText = elementperson.name;
              personName.style.fontWeight = "600";
              var personContent = document.createElement('p');
              personContent.innerText = elementperson.content;
              var personDescription = document.createElement('p');
              personDescription.innerText = elementperson.description;
              personDescription.style.color = "blue";
              personDescription.style.fontWeight = "600";
              var personImage = document.createElement('img');
              personImage.src = elementperson.image;
              personImage.style.width = "80px";
              personImage.style.borderRadius = "50%";
              var divPerson = document.createElement('div');
              divPerson.classList.add("carousel-card"); // Ajoute une classe spécifique

              divPerson.appendChild(personImage);
              divPerson.appendChild(personName);
              divPerson.appendChild(personDescription);
              divPerson.appendChild(personContent);
              divPerson.style.margin = "10px";
              divPerson.style.flexShrink = "0"; // Empêcher le rétrécissement des slides

              slideContainer.appendChild(divPerson);
            }
          };

          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch('peson.json'));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          persons = _context2.sent;
          slideContainer = document.querySelector('.carousel-slide');
          slideContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter les cartes

          index = 0;
          renderCarousel(); // Affiche les premières cartes
          // Navigation

          prevBtn = document.querySelector('#prev');
          nextBtn = document.querySelector('#next');
          nextBtn.addEventListener('click', function () {
            index = (index + 1) % persons.length; // Passer à la carte suivante

            renderCarousel();
            updateCarousel();
          });
          prevBtn.addEventListener('click', function () {
            index = (index - 1 + persons.length) % persons.length; // Revenir à la carte précédente

            renderCarousel();
            updateCarousel();
          });
          _context2.next = 21;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.error("Erreur lors du chargement des données :", _context2.t0);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 18]]);
}

person();