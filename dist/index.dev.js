"use strict";

//gestion de la bar de navigation

/*
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".divlink").forEach((button, index) => {
        button.addEventListener("click", function() {
            let content = document.querySelectorAll(".collapse")[index];

            // Toggle l'affichage du contenu
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
*/
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".collapse-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("collapse button clicked"); // Ferme tous les autres éléments

      document.querySelectorAll(".collapse-content").forEach(function (content) {
        content.classList.remove("active");
        var buttonplus = content.previousElementSibling.querySelector(".buttoncontentId");
        buttonplus.innerHTML = "";
        buttonplus.innerText = "+";
      });
      var content = button.nextElementSibling;
      var isActive = content.classList.contains("active");

      if (!isActive) {
        content.classList.add("active"); // Change l'icône du bouton de cet élément

        var buttonplus = button.querySelector(".buttoncontentId");
        buttonplus.innerHTML = "";
        buttonplus.innerText = "-";
      } else {
        // Réinitialise si l'élément est déjà ouvert
        var _buttonplus = button.querySelector(".buttoncontentId");

        _buttonplus.innerHTML = "";
        _buttonplus.innerText = "+";
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
            var element = forfait[i]; //.atribute.slice(0,3);

            var initialAttributes = element.atribute.slice(0, 12);
            var fullAttributes = element.atribute;
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
            forfaitHead.style.backgroundColor = "oklch(0.257 0.09 281.288)";
            forfaitHead.style.color = "white";
            forfaitHead.style.fontWeight = "500";
            forfaitHead.style.borderRadius = "10px 10px 0px 0px";
            forfaitHead.style.border = "1px solid gray";
            var isExpanded = false;
            var divForfait = document.createElement('div');
            divForfait.classList.add("col-sm-12", "col-md-12", "col-lg-3"); // Créer la liste des attributs

            var forfaitAtributeList = document.createElement('ul');
            forfaitAtributeList.style.width = "100";
            forfaitAtributeList.style.listStylePosition = "inside";
            forfaitAtributeList.style.margin = "0";
            forfaitAtributeList.style.padding = "0";
            var button = document.createElement('button');
            button.innerText = "commander";
            button.style.backgroundColor = "aqua";
            button.style.color = "blue";
            button.style.border = "none"; // Fonction pour afficher tous les attributs

            var showAllAttributes = function showAllAttributes() {
              if (!isExpanded) {
                fullAttributes.slice(15).forEach(function (attr) {
                  var li = document.createElement('li');
                  li.innerHTML = "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" \n                class=\"icon w-6 h-6 text-primary-900\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n                    <path fill=\"currentColor\" d=\"m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z\"></path>\n                </svg> ".concat(attr);
                  forfaitAtributeList.appendChild(li);
                });
                isExpanded = true;
              }
            }; // Fonction pour masquer les attributs et revenir aux 3 initiaux


            var hideExtraAttributes = function hideExtraAttributes() {
              if (isExpanded) {
                while (forfaitAtributeList.children.length > 12) {
                  forfaitAtributeList.removeChild(forfaitAtributeList.lastChild);
                }

                isExpanded = false;
              }
            }; // Ajouter les 3 attributs de base


            initialAttributes.forEach(function (attr) {
              var li = document.createElement('li');
              li.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" \n        class=\"icon w-6 h-6 text-primary-900\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z\"></path>\n        </svg> ".concat(attr);
              forfaitAtributeList.appendChild(li);
            }); // Gérer l'affichage des attributs au survol du forfait

            button.addEventListener('mouseenter', showAllAttributes); // S'assurer que les attributs restent affichés tant que la souris est dessus

            forfaitAtributeList.addEventListener('mouseenter', function () {
              isExpanded = true; // Empêche la liste de se cacher
            }); // Masquer les attributs quand la souris quitte complètement la section

            button.addEventListener('mouseleave', function (event) {
              setTimeout(function () {
                if (!button.matches(':hover') && !forfaitAtributeList.matches(':hover')) {
                  hideExtraAttributes();
                }
              }, 200); // Petit délai pour éviter les disparitions instantanées
            });
            var forfaitButtom = document.createElement("div");
            forfaitButtom.appendChild(forfaitAtributeList);
            forfaitButtom.appendChild(button);
            forfaitButtom.style.borderRadius = "0px 0px 10px 10px";
            forfaitButtom.style.border = "1px solid gray";
            divForfait.appendChild(forfaitHead);
            divForfait.appendChild(forfaitButtom); // Ajout de la liste des attributs

            divForfait.style.borderRadius = "10px";
            var divsectionForfait = document.querySelector('#forfait');
            divsectionForfait.appendChild(divForfait);
            var sectionForfait = document.querySelector('.forfait');
            sectionForfait.style.backgroundColor = "#d1d5db";
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

function loaddomaine() {
  var reponse, domaine, table, domainediv, i, domainelement, row, domainetd, newpricetd, oldpriceTd;
  return regeneratorRuntime.async(function loaddomaine$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('domaine.json'));

        case 2:
          reponse = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(reponse.json());

        case 5:
          domaine = _context2.sent;
          table = document.createElement('table');
          domainediv = document.getElementById('domaine');

          for (i = 0; i < domaine.length; i++) {
            domainelement = domaine[i];
            row = document.createElement('tr');
            domainetd = document.createElement('td');
            domainetd.innerText = domainelement.domain;
            newpricetd = document.createElement('td');
            newpricetd.innerText = domainelement.newPrice;
            oldpriceTd = document.createElement('td');
            oldpriceTd.innerText = domainelement.oldPrice;
            oldpriceTd.classList.add('old-price');
            table.classList.add('col-md-12', 'col-lg-12', 'col-sm-12');
            table.style.margin = '0px';
            row.appendChild(domainetd);
            row.appendChild(newpricetd);
            row.appendChild(oldpriceTd);
            table.appendChild(row);
            domainediv.appendChild(table);
          }

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

loaddomaine();

function person() {
  var renderCarousel, response, persons, slideContainer, index, prevBtn, nextBtn;
  return regeneratorRuntime.async(function person$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

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
              personContent.style.fontWeight = "bold";
              var personDescription = document.createElement('p');
              personDescription.innerText = elementperson.description;
              personDescription.style.color = "blue";
              personDescription.style.fontWeight = "700";
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

          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch('peson.json'));

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          persons = _context3.sent;
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
          _context3.next = 21;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](0);
          console.error("Erreur lors du chargement des données :", _context3.t0);

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 18]]);
}

person(); //transferde page
// Sélection des éléments

var displayDiv = document.getElementById("main");
var EnregistrerButton = document.querySelectorAll(".loadPage"); // Ajouter un événement au bouton pour charger le contenu

EnregistrerButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    console.log("button clicked");
    event.preventDefault(); // Utiliser fetch pour récupérer le contenu de l'autre page

    var pageUrl = button.getAttribute("data-page");
    var scriptUrl = button.getAttribute("data-script");
    console.log(pageUrl);
    fetch(pageUrl).then(function (response) {
      if (!response.ok) {
        throw new Error("Erreur de chargement de la page");
      }

      return response.text(); // Récupérer le texte de la page
    }).then(function (html) {
      // Créer un élément temporaire pour extraire la section
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = html; // Sélectionner la section à partir de l'autre page

      var sectionToLoad = tempDiv.querySelector("#sectionToLoad");

      if (sectionToLoad) {
        // Remplacer le contenu du main avec la section récupérée
        displayDiv.innerHTML = "";
        displayDiv.appendChild(sectionToLoad); // Charger dynamiquement le script associé après l'insertion
      } else {
        console.log("Section non trouvée sur l'autre page");
      }
    })["catch"](function (error) {
      console.error("Erreur:", error);
    });
  });
}); // Fonction pour charger un script JS dynamiquement

function loadScript(url) {
  if (url) {
    var script = document.createElement("script");
    script.src = url;

    script.onload = function () {
      return console.log("Script chargé :", url);
    };

    document.body.appendChild(script);
  }
}