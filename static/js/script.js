const sections = document.querySelectorAll("section, div");
const navLinks = document.querySelectorAll(".nav-link");

function activateMenu() {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activateMenu);
