

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});



const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    observer.observe(element);

});



const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}



const portfolioProjectCards =
    document.querySelectorAll(".project-card");

portfolioProjectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "transform 0.3s ease";

    });

});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});



const projectCategoryButtons =
    document.querySelectorAll(".filter-btn");

const projectGrid =
    document.getElementById("projectGrid");

const dropdownProjectCards =
    projectGrid.querySelectorAll(".project-card");

projectCategoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;
        const isAlreadyOpen = button.classList.contains("active");

        projectCategoryButtons.forEach(categoryButton => {
            categoryButton.classList.remove("active");
            categoryButton.setAttribute("aria-expanded", "false");
        });

        if (isAlreadyOpen) {
            projectGrid.classList.add("projects-closed");
            return;
        }

        projectGrid.classList.remove("projects-closed");
        button.classList.add("active");
        button.setAttribute("aria-expanded", "true");

        dropdownProjectCards.forEach(card => {
            const shouldShow =
                card.dataset.category === selectedCategory;

            card.classList.toggle("hidden", !shouldShow);
        });

    });

});


const documentOpenButtons = document.querySelectorAll("[data-open-document]");

documentOpenButtons.forEach(button => {

    const dialog = document.getElementById(button.dataset.openDocument);

    if (!dialog) return;

    button.addEventListener("click", () => {

        dialog.showModal();

    });

});

document.querySelectorAll(".document-dialog").forEach(dialog => {

    const closeButton = dialog.querySelector(".document-close");

    if (closeButton) {

        closeButton.addEventListener("click", () => {

            dialog.close();

        });

    }

    dialog.addEventListener("click", event => {

        if (event.target === dialog) {

            dialog.close();

        }

    });

});