



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