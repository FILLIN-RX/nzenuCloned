"use strict";

console.log("enregistre.js loaded");
setTimeout(function () {
  console.log("Attachement des événements après chargement dynamique");
  document.querySelectorAll(".collapse-button").forEach(function (button) {
    button.removeEventListener("click", toggleCollapse); // Supprime l'ancien écouteur

    button.addEventListener("click", toggleCollapse); // Ajoute le nouvel écouteur
  });
}, 100); // Petite attente pour garantir que les éléments sont bien présents

function toggleCollapse(event) {
  console.log("collapse button clicked"); // Ferme tous les autres éléments

  document.querySelectorAll(".collapse-content").forEach(function (content) {
    content.classList.remove("active");
    var buttonplus = content.previousElementSibling.querySelector(".buttoncontentId");
    buttonplus.innerHTML = "";
    buttonplus.innerText = "+";
  });
  var content = event.currentTarget.nextElementSibling;
  var isActive = content.classList.contains("active");

  if (!isActive) {
    content.classList.add("active"); // Change l'icône du bouton de cet élément

    var buttonplus = event.currentTarget.querySelector(".buttoncontentId");
    buttonplus.innerHTML = "";
    buttonplus.innerText = "-";
  } else {
    // Réinitialise si l'élément est déjà ouvert
    var _buttonplus = event.currentTarget.querySelector(".buttoncontentId");

    _buttonplus.innerHTML = "";
    _buttonplus.innerText = "+";
  }
}
/*
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".collapse-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("collapse button clicked");

            // Ferme tous les autres éléments
            document.querySelectorAll(".collapse-content").forEach(content => {
                content.classList.remove("active");

                const buttonplus = content.previousElementSibling.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "+";
            });

            const content = button.nextElementSibling;
            const isActive = content.classList.contains("active");

            if (!isActive) {
                content.classList.add("active");

                // Change l'icône du bouton de cet élément
                const buttonplus = button.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "-";
            } else {
                // Réinitialise si l'élément est déjà ouvert
                const buttonplus = button.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "+";
            }
        });
    });
});
*/

/*

async function loaddomaine() {
    const reponse= await fetch('domaine.json')
    const domaine= await reponse.json()
    const table = document.createElement('table');
    const domainediv = document.getElementById('domaine')
    for (let i = 0; i < domaine.length; i++) {

        const domainelement = domaine[i];
        const row =document.createElement('tr')
        const domainetd = document.createElement('td')
        domainetd.innerText=domainelement.domain
        const newpricetd = document.createElement('td')
        newpricetd.innerText=domainelement.newPrice
        const  oldpriceTd = document.createElement('td')
        oldpriceTd.innerText=domainelement.oldPrice
        oldpriceTd.classList.add('old-price')
        table.classList.add('col-md-12', 'col-lg-12','col-sm-12')
        table.style.margin='0px';
        row.appendChild(domainetd)
        row.appendChild(newpricetd)
        row.appendChild(oldpriceTd)
        table.appendChild(row);
        domainediv.appendChild(table)

        
    }

    
}
loaddomaine()
*/


function loaddomaine() {
  var reponse, domaine, table, domainediv, i, domainelement, row, domainetd, newpricetd, oldpriceTd;
  return regeneratorRuntime.async(function loaddomaine$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('domaine.json'));

        case 2:
          reponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(reponse.json());

        case 5:
          domaine = _context.sent;
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
          return _context.stop();
      }
    }
  });
}

loaddomaine();