



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