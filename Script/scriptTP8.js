function calculDevis() {
    let surf = parseInt(document.getElementById("surface").value);
    let epai = parseInt(document.getElementById("epaisseur").value);
    
    if (isNaN(surf) || isNaN(epai) || surf <= 0 || epai < 15 || epai > 35) {
        alert("Veuillez entrer une surface valide et une épaisseur entre 15 et 35 cm.");
        return;
    }

    
}