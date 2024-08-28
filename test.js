
document.addEventListener("DOMContentLoaded", function() {
    // Find alle billeder
    var drinks = document.querySelectorAll("img");

    // Loop gennem alle billeder og tilføj en klik-hændelse
    drinks.forEach(function(drink) {  // Ændret variabelnavnet til "drink" for klarhed
        drink.addEventListener("click", function() {
            if (drink.alt == "øl" || drink.alt == "snaps") {
                console.log("indeholder alkohol");
            } else {
                console.log("alkoholfri");
            }
        });
    });
});
