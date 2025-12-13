let slideshowPornit = false;
let interval;
let index = 0;

const imagini = document.querySelectorAll("#imagini img");
const sectiuneMonitorizare = document.getElementById("monitorizare");

function pornesteSlideshow() {
    imagini.forEach(img => img.style.display = "none");

    interval = setInterval(() => {
        imagini.forEach(img => img.style.display = "none");
        imagini[index].style.display = "block";
        index = (index + 1) % imagini.length;
    }, 3000);
}

function opresteSlideshow() {
    clearInterval(interval);
    imagini.forEach(img => img.style.display = "inline-block");
    index = 0;
}

sectiuneMonitorizare.addEventListener("dblclick", () => {
    if (!slideshowPornit) {
        pornesteSlideshow();
        slideshowPornit = true;
    } else {
        opresteSlideshow();
        slideshowPornit = false;
    }
});
