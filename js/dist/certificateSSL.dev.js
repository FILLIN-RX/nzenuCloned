"use strict";

function genereForfaitSSL() {
  var reponse, _loop, i;

  return regeneratorRuntime.async(function genereForfaitSSL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('forfaitSSL.json'));

        case 2:
          reponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(reponse.json());

        case 5:
          forfait = _context.sent;

          _loop = function _loop(i) {
            var element = forfait[i]; //.atribute.slice(0,3);

            var forfaitname = document.createElement('h2');
            forfaitname.innerText = element.name;
            var forfaitContent = document.createElement('p');
            forfaitContent.innerText = element.description;
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
            forfaitHead.classList.add("forfaitHead");
            var divForfait = document.createElement('div');
            divForfait.classList.add("col-sm-12", "col-md-12", "col-lg-3");
            var forfaitAtributeList = document.createElement('ul');
            forfaitAtributeList.style.width = "100";
            forfaitAtributeList.style.listStylePosition = "inside";
            forfaitAtributeList.style.margin = "0";
            forfaitAtributeList.style.padding = "0";
            var button = document.createElement('button');
            button.innerText = "commander";
            button.style.margin = "5px";
            button.style.backgroundColor = "aqua";
            button.style.color = "blue";
            button.style.border = "none"; // Fonction pour afficher tous les attributs

            element.attribute.forEach(function (attr) {
              var li = document.createElement('li');
              li.innerHTML = "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" \n                class=\"icon w-6 h-6 text-primary-900\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n                    <path fill=\"currentColor\" d=\"m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z\"></path>\n                </svg> ".concat(attr);
              forfaitAtributeList.appendChild(li);
            });
            forfaitAtributeList.style.flexGrow = "1";
            var forfaitButtom = document.createElement("div");
            forfaitButtom.appendChild(forfaitAtributeList);
            forfaitButtom.appendChild(button);
            forfaitButtom.style.borderRadius = "0px 0px 10px 10px";
            forfaitButtom.style.border = "1px solid gray";
            divForfait.appendChild(forfaitHead);
            divForfait.appendChild(forfaitButtom);
            divForfait.style.borderRadius = "10px";
            divForfait.style.display = "flex";
            divForfait.style.flexDirection = "column";
            divForfait.style.display = "flex";
            divForfait.style.flexDirection = "column";
            divForfait.style.alignItems = "stretch";
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

genereForfaitSSL();