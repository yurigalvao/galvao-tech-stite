
        const sections = document.querySelectorAll("section");

        const reveal = () => {
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    sec.style.opacity = "1";
                    sec.style.transform = "translateY(0)";
                }
            });
        };

        // Inicializa seções com opacidade zero
        sections.forEach(sec => {
            sec.style.opacity = "0";
            sec.style.transform = "translateY(30px)";
            sec.style.transition = "all 0.6s ease";
        });

        window.addEventListener("scroll", reveal);
        reveal();

        // Carrossel dos projetos (opcional, já que usamos grid)
        const container = document.querySelector(".projetos-grid");
        const btnLeft = document.querySelector(".btn-esquerda");
        const btnRight = document.querySelector(".btn-direita");

        if (container && btnLeft && btnRight) {
            btnLeft.addEventListener("click", () => {
                container.scrollBy({ left: -350, behavior: "smooth" });
            });

            btnRight.addEventListener("click", () => {
                container.scrollBy({ left: 350, behavior: "smooth" });
            });
        } 