"use strict";

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