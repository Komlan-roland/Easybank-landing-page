const open = document.querySelector("#openMenu");
const close = document.querySelector("#closeMenu");
const sideMenu = document.querySelector("#sideMenu");

if (window.innerWidth <= 768) {

    open.addEventListener("click", () => {
        sideMenu.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";

    })

    function hideMenu() {
        sideMenu.style.display = "none";
        close.style.display = "none";
        open.style.display = "block";

    }

    close.addEventListener("click", hideMenu);

    sideMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", hideMenu);
    });

    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && event.target !== open) {
            hideMenu();
        }
    });
}