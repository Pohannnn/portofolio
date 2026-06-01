const tombol = document.getElementById("theme-toggle");

tombol.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

});


const aboutCards = document.querySelectorAll(".about-card");

aboutCards.forEach(card => {

    card.addEventListener("click", () => {

        if(card.classList.contains("active")){

            card.classList.remove("active");

        }else{

            aboutCards.forEach(c => {
                c.classList.remove("active");
            });

            card.classList.add("active");

        }

    });

});